import { useRef, useState } from 'react';
import { DEFAULT_RANDOM_ARRAY_LENGTH, ALGO_FUNCTIONS } from '../constants';
import { initSortStep, generateIdentifiedNumberList, sleep } from '../utils';
import type { IdentifiedNumber, SortAlgorithm, SortStep, SortSteps } from '../types';

interface UseSortControlsReturn {
	listState: SortStep<IdentifiedNumber>;
	stepIndex: number;
	stepsCount: number;
	isSorting: boolean;
	genNewList: (length?: number, min?: number, max?: number) => void;
	performSort: (sortAlgorithm: SortAlgorithm, delay?: number) => Promise<void>;
	stopSort: () => void;
	prevStep: () => void;
	nextStep: () => void;
}

function useSortControls(): UseSortControlsReturn {
	const [listState, setListState] = useState<SortStep<IdentifiedNumber>>(
		initSortStep(generateIdentifiedNumberList())
	);
	const [sortSteps, setSortSteps] = useState<SortSteps<IdentifiedNumber>>([listState]);
	const [stepIndex, setStepIndex] = useState(0);

	const [isSorting, setIsSorting] = useState(false);
	const isSortingRef = useRef(false);

	const toggleIsSorting = (currentlySorting: boolean): void => {
		/*
      using ref for mid function checking (because we can't see state change mid-function)
      and state for exporting it out of the hook for start/end of sorting
    */
		setIsSorting(currentlySorting);
		isSortingRef.current = currentlySorting;
	};

	const genNewList = (length = DEFAULT_RANDOM_ARRAY_LENGTH): void => {
		// stopping current sorting
		toggleIsSorting(false);

		const newList = initSortStep(generateIdentifiedNumberList(length));

		setListState(newList);
		setSortSteps([newList]);
		setStepIndex(0);
	};

	const performSort = async (sortAlgorithm: SortAlgorithm, delay = 500): Promise<void> => {
		// when clicking sorting button again (when already in sort process)
		if (isSortingRef.current) {
			return;
		}

		const steps = ALGO_FUNCTIONS[sortAlgorithm]([...listState.array]);

		setStepIndex(-1);
		setSortSteps(steps);
		toggleIsSorting(true);

		for (const step of steps) {
			// if stoping the sort, breaking out of the steps loop
			if (!isSortingRef.current) {
				break;
			}

			setStepIndex((prevIndex) => prevIndex + 1);
			setListState(step);
			await sleep(delay);
		}

		toggleIsSorting(false);
	};

	const stopSort = (): void => {
		toggleIsSorting(false);

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
		isSorting,
		genNewList,
		performSort,
		stopSort,
		prevStep,
		nextStep,
	};
}

export default useSortControls;
