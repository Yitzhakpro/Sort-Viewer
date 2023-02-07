import { useState, useRef } from "react";
import { DEFAULT_RANDOM_ARRAY_LENGTH } from "../constants";
import { initSortStep, generateIdentifiedNumberList, sleep } from "../utils";
import { bubbleSortWithSteps, mergeSortWithSteps } from "../algorithms";
import type {
  IdentifiedNumber,
  SortAlgorithm,
  SortStep,
  SortSteps,
} from "../types";

interface UseSortControlsReturn {
  listState: SortStep<IdentifiedNumber>;
  stepIndex: number;
  stepsCount: number;
  genNewList: (length?: number, min?: number, max?: number) => void;
  performSort: (sortAlgorithm: SortAlgorithm, speed?: number) => Promise<void>;
  stopSort: () => void;
  prevStep: () => void;
  nextStep: () => void;
}

function useSortControls(): UseSortControlsReturn {
  const [listState, setListState] = useState<SortStep<IdentifiedNumber>>(
    initSortStep(generateIdentifiedNumberList())
  );
  const [sortSteps, setSortSteps] = useState<SortSteps<IdentifiedNumber>>([
    listState,
  ]);
  const [stepIndex, setStepIndex] = useState(0);

  const isSorting = useRef(false);

  const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
    // stopping current sorting
    isSorting.current = false;

    const newList = initSortStep(generateIdentifiedNumberList(length));

    setListState(newList);
    setSortSteps([newList]);
    setStepIndex(0);
  };

  const performSort = async (
    sortAlgorithm: SortAlgorithm,
    speed = 500
  ): Promise<void> => {
    // when clicking sorting button again (when already in sort process)
    if (isSorting.current) {
      return;
    }

    let steps: SortSteps<IdentifiedNumber>;

    switch (sortAlgorithm) {
      case "bubbleSort":
        steps = bubbleSortWithSteps(listState.array);
        break;
      case "mergeSort":
        steps = mergeSortWithSteps(listState.array);
        break;
      default:
        return;
    }

    setStepIndex(-1);
    setSortSteps(steps);
    isSorting.current = true;

    for (const step of steps) {
      // if stoping the sort, breaking out of the steps loop
      if (!isSorting.current) {
        break;
      }

      setStepIndex((prevIndex) => prevIndex + 1);
      setListState(step);
      await sleep(speed);
    }
  };

  const stopSort = (): void => {
    isSorting.current = false;

    const initedSortStep = initSortStep(listState.array);
    setListState(initedSortStep);
  };

  const prevStep = (): void => {
    const index = stepIndex;

    if (index === 0) {
      return;
    }

    const updatedStep = sortSteps[index - 1];
    setListState(updatedStep);
    setStepIndex((prevIndex) => prevIndex - 1);
  };

  const nextStep = (): void => {
    const index = stepIndex;

    if (index === sortSteps.length - 1) {
      return;
    }

    const updatedStep = sortSteps[index + 1];
    setListState(updatedStep);
    setStepIndex((prevIndex) => prevIndex + 1);
  };

  return {
    listState,
    stepsCount: sortSteps.length,
    stepIndex,
    genNewList,
    performSort,
    stopSort,
    prevStep,
    nextStep,
  };
}

export default useSortControls;
