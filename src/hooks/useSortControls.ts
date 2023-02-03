import { useState } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { initSortStep, generateNumberArray, sleep } from "../utils";
import { bubbleSortWithSteps } from "../algorithms";
import type { SortAlgorithm, SortStep, SortSteps } from "../types";

interface UseSortControlsReturn {
  listState: SortStep<number>;
  genNewList: (length?: number, min?: number, max?: number) => void;
  performSort: (sortAlgorithm: SortAlgorithm, speed?: number) => Promise<void>;
}

function useSortControls(): UseSortControlsReturn {
  const [listState, setListState] = useState(
    initSortStep(generateNumberArray())
  );

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

    for (const step of steps) {
      setListState(step);
      await sleep(speed);
    }
  };

  return { listState, genNewList, performSort };
}

export default useSortControls;
