import { useState, useRef } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { initSortStep, generateNumberArray, sleep } from "../utils";
import { bubbleSortWithSteps } from "../algorithms";
import type { SortAlgorithm, SortStep, SortSteps } from "../types";

interface UseSortControlsReturn {
  listState: SortStep<number>;
  genNewList: (length?: number, min?: number, max?: number) => void;
  performSort: (sortAlgorithm: SortAlgorithm, speed?: number) => Promise<void>;
  stopSort: () => void;
}

function useSortControls(): UseSortControlsReturn {
  const [listState, setListState] = useState(
    initSortStep(generateNumberArray())
  );

  const isSorting = useRef(false);

  const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
    const newList = initSortStep(generateNumberArray(length));

    setListState(newList);
  };

  const performSort = async (
    sortAlgorithm: SortAlgorithm,
    speed = 500
  ): Promise<void> => {
    let steps: SortSteps<number>;

    switch (sortAlgorithm) {
      case "bubbleSort":
        steps = bubbleSortWithSteps(listState.array);
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
