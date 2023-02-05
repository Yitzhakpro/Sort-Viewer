export type SortAlgorithm = "bubbleSort" | "mergeSort";

export type ColorMappingType = "CHECK" | "SWAPPING" | "SORTED";

export interface ColorMapping {
  [index: number]: ColorMappingType;
}

export interface SortStep<T> {
  array: T[];
  colorMapping: ColorMapping;
  permanentColorMapping: ColorMapping;
}

export type SortSteps<T> = SortStep<T>[];
