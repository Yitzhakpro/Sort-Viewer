import type { CSSProperties } from "react";
import type { ColorMappingType } from "../types";

export const COLOR_SORTING_MAPPING: Record<
  ColorMappingType,
  CSSProperties["backgroundColor"]
> = {
  CHECK: "orange",
  SWAPPING: "red",
  SORTED: "darkgreen",
};
