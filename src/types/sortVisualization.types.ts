import type { CSSProperties } from "react";

export interface ColorMapping {
  [index: number]: CSSProperties["backgroundColor"];
}

export interface SortStep<T> {
  array: T[];
  colorMapping: ColorMapping;
  permanentColorMapping: ColorMapping;
}

export type SortSteps<T> = SortStep<T>[];
