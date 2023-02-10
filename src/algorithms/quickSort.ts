import { createSortStep, initSortStep } from "../utils";
import type {
  ColorMapping,
  IdentifiedNumber,
  IdentifiedNumberList,
  SortSteps,
} from "../types";

function partition(
  arr: IdentifiedNumberList,
  left: number,
  right: number,
  steps: SortSteps<IdentifiedNumber>
) {
  let pivot = arr[right];

  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    const checkIndexI = i < 0 ? 0 : i;
    steps.push(
      createSortStep(
        arr,
        {
          [checkIndexI]: "CHECK",
          [j]: "CHECK",
          [right]: "PIVOT",
        },
        { ...steps.at(-1)?.permanentColorMapping }
      )
    );

    if (arr[j].number < pivot.number) {
      i++;

      // preventing 'Marking' of same element with swap colors
      if (i === j) {
        continue;
      }

      steps.push(
        createSortStep(
          arr,
          { [i]: "CHECK", [j]: "CHECK", [right]: "PIVOT" },
          { ...steps.at(-1)?.permanentColorMapping }
        )
      );

      steps.push(
        createSortStep(
          arr,
          {
            [i]: "SWAPPING",
            [j]: "SWAPPING",
            [right]: "PIVOT",
          },
          { ...steps.at(-1)?.permanentColorMapping }
        )
      );
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      steps.push(
        createSortStep(
          arr,
          {
            [i]: "SWAPPING",
            [j]: "SWAPPING",
            [right]: "PIVOT",
          },
          { ...steps.at(-1)?.permanentColorMapping }
        )
      );
    }
  }

  // Swapping and 'marking' only if its not the same index
  if (i + 1 !== right) {
    steps.push(
      createSortStep(
        arr,
        {
          [i + 1]: "SWAPPING",
          [right]: "SWAPPING",
        },
        { ...steps.at(-1)?.permanentColorMapping }
      )
    );
    const temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    steps.push(
      createSortStep(
        arr,
        {
          [i + 1]: "SWAPPING",
          [right]: "SWAPPING",
        },
        { ...steps.at(-1)?.permanentColorMapping }
      )
    );
  }

  return i + 1;
}

function quickSort(
  arr: IdentifiedNumberList,
  left: number,
  right: number,
  steps: SortSteps<IdentifiedNumber>
) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right, steps);

    quickSort(arr, left, partitionIndex - 1, steps);
    quickSort(arr, partitionIndex + 1, right, steps);
  } else {
    if (right >= 0) {
      const sortedMapping: ColorMapping = {};
      for (let i = 0; i <= right; i++) {
        sortedMapping[i] = "SORTED";
      }

      steps.push(
        createSortStep(
          arr,
          {},
          { ...steps.at(-1)?.permanentColorMapping, ...sortedMapping }
        )
      );
    }
  }
}

export function quickSortWithSteps(
  arr: IdentifiedNumberList
): SortSteps<IdentifiedNumber> {
  const quickSortSteps: SortSteps<IdentifiedNumber> = [initSortStep(arr)];

  quickSort(arr, 0, arr.length - 1, quickSortSteps);
  // settings color to default
  quickSortSteps.push(createSortStep(arr, {}, {}));

  return quickSortSteps;
}
