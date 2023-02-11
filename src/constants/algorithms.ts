import type { SortAlgorithm } from "../types";

interface LabeledAlgorithm {
  label: string;
  value: SortAlgorithm;
}

export const LABLED_ALGORITHMS: LabeledAlgorithm[] = [
  { label: "Bubble Sort", value: "bubbleSort" },
  { label: "Merge Sort", value: "mergeSort" },
  { label: "Quick Sort", value: "quickSort" },
];
