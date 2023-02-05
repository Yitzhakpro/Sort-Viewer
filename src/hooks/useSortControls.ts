import { useState, useRef } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { initSortStep, generateIdentifiedNumberList, sleep } from "../utils";
import { bubbleSortWithSteps, mergeSortWithSteps } from "../algorithms";
import type {
  IdentifiedNumber,
  SortAlgorithm,
  SortStep,
  SortSteps,
} from "../types";

interface UseSortControlsReturn {
  listState: SortStep<IdentifiedNumber>;
  genNewList: (length?: number, min?: number, max?: number) => void;
  performSort: (sortAlgorithm: SortAlgorithm, speed?: number) => Promise<void>;
  stopSort: () => void;
}

function useSortControls(): UseSortControlsReturn {
  const [listState, setListState] = useState(
    initSortStep(generateIdentifiedNumberList())
  );

  const isSorting = useRef(false);

  const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
    // stopping current sorting
    isSorting.current = false;

    const newList = initSortStep(generateIdentifiedNumberList(length));

    setListState(newList);
  };

  const performSort = async (
    sortAlgorithm: SortAlgorithm,
    speed = 500
  ): Promise<void> => {
    let steps: SortSteps<IdentifiedNumber>;

    switch (sortAlgorithm) {
      case "bubbleSort":
        steps = bubbleSortWithSteps(listState.array);
        break;
      case "mergeSort":
        steps = mergeSortWithSteps(listState.array);
        break;
      default:
        return;
    }

    isSorting.current = true;

    for (const step of steps) {
      // if stoping the sort, breaking out of the steps loop
      if (!isSorting.current) {
        break;
      }

      setListState(step);
      await sleep(speed);
    }
  };

  const stopSort = (): void => {
    isSorting.current = false;

    const initedSortStep = initSortStep(listState.array);
    setListState(initedSortStep);
  };

  return { listState, genNewList, performSort, stopSort };
}

export default useSortControls;
