import { createSortStep, initSortStep } from "../utils";
import type { SortSteps } from "../types";

export function bubbleSortWithSteps<T>(arr: T[]): SortSteps<T> {
  const arrSize = arr.length;
  const bubbleSortSteps: SortSteps<T> = [initSortStep(arr)];

  for (let i = 0; i < arrSize - 1; i++) {
    for (let j = 0; j < arrSize - i - 1; j++) {
      bubbleSortSteps.push(
        createSortStep(
          arr,
          { [j]: "green", [j + 1]: "green" },
          { ...bubbleSortSteps.at(-1)?.permanentColorMapping }
        )
      );
      if (arr[j] > arr[j + 1]) {
        bubbleSortSteps.push(
          createSortStep(
            arr,
            { [j]: "red", [j + 1]: "red" },
            { ...bubbleSortSteps.at(-1)?.permanentColorMapping }
          )
        );
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        bubbleSortSteps.push(
          createSortStep(
            arr,
            { [j]: "red", [j + 1]: "red" },
            { ...bubbleSortSteps.at(-1)?.permanentColorMapping }
          )
        );
      }
    }
    bubbleSortSteps.push(
      createSortStep(
        arr,
        {},
        {
          ...bubbleSortSteps.at(-1)?.permanentColorMapping,
          [arrSize - i - 1]: "purple",
        }
      )
    );
  }

  return bubbleSortSteps;
}
