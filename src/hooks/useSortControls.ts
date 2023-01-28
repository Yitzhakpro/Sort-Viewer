import { useState } from "react";
import {
  DEFAULT_RANDOM_ARRAY_LENGTH,
  DEFAULT_MIN_RANDOM_NUMBER,
  DEFAULT_MAX_RANDOM_NUMBER,
} from "../constants";
import { generateNumberArray } from "../utils";

interface UseSortControlsReturn {
  list: number[];
  maxNum: number;
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function useSortControls(): UseSortControlsReturn {
  const [list, setList] = useState(generateNumberArray());
  const [maxNum, setMaxNum] = useState(DEFAULT_MAX_RANDOM_NUMBER);

  const genNewList = (
    length = DEFAULT_RANDOM_ARRAY_LENGTH,
    min = DEFAULT_MIN_RANDOM_NUMBER,
    max = DEFAULT_MAX_RANDOM_NUMBER
  ): void => {
    const newList = generateNumberArray(length, min, max);

    setMaxNum(max);
    setList(newList);
  };

  return { list, maxNum, genNewList };
}

export default useSortControls;
