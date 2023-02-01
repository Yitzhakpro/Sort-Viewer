import type { ColorMapping, SortStep } from "../types";

export function initSortStep<T>(array: T[]): SortStep<T> {
  return {
    array: [...array],
    colorMapping: {},
    permanentColorMapping: {},
  };
}

export function createSortStep<T>(
  currentArray: T[],
  colorMapping: ColorMapping,
  permanentColorMapping?: ColorMapping
) {
  return {
    array: [...currentArray],
    colorMapping,
    permanentColorMapping: { ...permanentColorMapping },
  };
}
