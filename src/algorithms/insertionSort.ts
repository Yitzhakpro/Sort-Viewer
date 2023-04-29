import { createSortStep, initSortStep } from "../utils";
import type {
  IdentifiedNumber,
  IdentifiedNumberList,
  SortSteps,
} from "../types";

export function insertionSortWithSteps(
  arr: IdentifiedNumberList
): SortSteps<IdentifiedNumber> {
  const arrSize = arr.length;
  const insertionSortSteps: SortSteps<IdentifiedNumber> = [initSortStep(arr)];

  for (let i = 1; i < arrSize; i++) {
    const currentElement = arr[i];

    let j = i - 1;

    insertionSortSteps.push(
      createSortStep(arr, { [i]: "CHECK", [j]: "CHECK" }, {})
    );

    while (j >= 0 && arr[j].number > currentElement.number) {
      insertionSortSteps.push(
        createSortStep(arr, { [j]: "SWAPPING", [j + 1]: "SWAPPING" }, {})
      );
      const tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
      insertionSortSteps.push(
        createSortStep(arr, { [j]: "SWAPPING", [j + 1]: "SWAPPING" }, {})
      );

      j--;
    }
  }

  // settings color to default
  insertionSortSteps.push(createSortStep(arr, {}, {}));

  return insertionSortSteps;
}
