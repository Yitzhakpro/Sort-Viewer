import { describe, it, expect } from "vitest";
import { bubbleSortWithSteps } from "../bubbleSort";
import { mergeSortWithSteps } from "../mergeSort";
import { quickSortWithSteps } from "../quickSort";
import { UNSORTED_IDENTIFED_ARRAY_EXAMPLE } from "./data";

describe("Algorithms", () => {
  describe("Bubble Sort", () => {
    it("Should sort the given array", () => {
      const sortedArray = UNSORTED_IDENTIFED_ARRAY_EXAMPLE.sort(
        (a, b) => a.number - b.number
      );

      const steps = bubbleSortWithSteps(UNSORTED_IDENTIFED_ARRAY_EXAMPLE);

      const finalStep = steps[steps.length - 1];
      expect(finalStep.array).toEqual(sortedArray);
    });
  });

  describe("Merge Sort", () => {
    it("Should sort the given array", () => {
      const sortedArray = UNSORTED_IDENTIFED_ARRAY_EXAMPLE.sort(
        (a, b) => a.number - b.number
      );

      const steps = mergeSortWithSteps(UNSORTED_IDENTIFED_ARRAY_EXAMPLE);

      const finalStep = steps[steps.length - 1];
      expect(finalStep.array).toEqual(sortedArray);
    });
  });

  describe("Quick Sort", () => {
    it("Should sort the given array", () => {
      const sortedArray = UNSORTED_IDENTIFED_ARRAY_EXAMPLE.sort(
        (a, b) => a.number - b.number
      );

      const steps = quickSortWithSteps(UNSORTED_IDENTIFED_ARRAY_EXAMPLE);

      const finalStep = steps[steps.length - 1];
      expect(finalStep.array).toEqual(sortedArray);
    });
  });
});
