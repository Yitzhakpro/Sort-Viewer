import type { CSSProperties } from "react";

export type SortAlgorithm = "bubbleSort";

export interface ColorMapping {
  [index: number]: CSSProperties["backgroundColor"];
}

export interface SortStep<T> {
  array: T[];
  colorMapping: ColorMapping;
  permanentColorMapping: ColorMapping;
}

export type SortSteps<T> = SortStep<T>[];
