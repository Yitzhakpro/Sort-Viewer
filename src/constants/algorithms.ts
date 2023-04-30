import {
  bubbleSortWithSteps,
  insertionSortWithSteps,
  mergeSortWithSteps,
  quickSortWithSteps,
  selectionSortWithSteps,
} from "../algorithms";
import type {
  IdentifiedNumber,
  IdentifiedNumberList,
  SortAlgorithm,
  SortSteps,
} from "../types";

interface LabeledAlgorithm {
  label: string;
  value: SortAlgorithm;
}

export const LABLED_ALGORITHMS: LabeledAlgorithm[] = [
  { label: "Bubble Sort", value: "bubbleSort" },
  { label: "Insertion Sort", value: "insertionSort" },
  { label: "Selection Sort", value: "selectionSort" },
  { label: "Merge Sort", value: "mergeSort" },
  { label: "Quick Sort", value: "quickSort" },
];

type AlgoFunctions = Record<
  SortAlgorithm,
  (arr: IdentifiedNumberList) => SortSteps<IdentifiedNumber>
>;

export const ALGO_FUNCTIONS: AlgoFunctions = {
  bubbleSort: bubbleSortWithSteps,
  insertionSort: insertionSortWithSteps,
  selectionSort: selectionSortWithSteps,
  mergeSort: mergeSortWithSteps,
  quickSort: quickSortWithSteps,
};
