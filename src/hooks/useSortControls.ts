import { useState } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { generateNumberArray } from "../utils";

interface UseSortControlsReturn {
  list: number[];
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function useSortControls(): UseSortControlsReturn {
  const [list, setList] = useState(generateNumberArray());

  const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
    const newList = generateNumberArray(length);

    setList(newList);
  };

  return { list, genNewList };
}

export default useSortControls;
