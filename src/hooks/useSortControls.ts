import { useState } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { initSortStep, generateNumberArray } from "../utils";
import type { SortStep } from "../types";

interface UseSortControlsReturn {
  listState: SortStep<number>;
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function useSortControls(): UseSortControlsReturn {
  const [listState, setListState] = useState(
    initSortStep(generateNumberArray())
  );

  const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
    const newList = initSortStep(generateNumberArray(length));

    setListState(newList);
  };

  return { listState, genNewList };
}

export default useSortControls;
