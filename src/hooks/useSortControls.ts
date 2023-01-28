import { useState } from "react";
import { generateNumberArray } from "../utils";

interface UseSortControlsReturn {
  list: number[];
  genNewList: (length?: number, min?: number, max?: number) => void;
}

function useSortControls(): UseSortControlsReturn {
  const [list, setList] = useState(generateNumberArray());

  const genNewList = (length = 5, min = 0, max = 100): void => {
    const newList = generateNumberArray(length, min, max);

    setList(newList);
  };

  return { list, genNewList };
}

export default useSortControls;
