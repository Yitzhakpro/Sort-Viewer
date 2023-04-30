export type SortAlgorithm =
  | "bubbleSort"
  | "insertionSort"
  | "selectionSort"
  | "mergeSort"
  | "quickSort";

export type ColorMappingType = "CHECK" | "PIVOT" | "SWAPPING" | "SORTED";

export interface ColorMapping {
  [index: number]: ColorMappingType;
}

export interface SortStep<T> {
  array: T[];
  colorMapping: ColorMapping;
  permanentColorMapping: ColorMapping;
}

export type SortSteps<T> = SortStep<T>[];
