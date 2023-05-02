import { createSortStep, initSortStep } from '../utils';
import type { IdentifiedNumber, IdentifiedNumberList, SortSteps } from '../types';

// TODO: more information about swapping and fast array update
function merge(
	arr: IdentifiedNumberList,
	start: number,
	mid: number,
	end: number,
	steps: SortSteps<IdentifiedNumber>
): void {
	let left = start;
	let right = mid;
	const temp = [];

	while (left < mid && right < end) {
		steps.push(
			createSortStep(
				arr,
				{ [left]: 'CHECK', [right]: 'CHECK' },
				{ ...steps.at(-1)?.permanentColorMapping }
			)
		);

		if (arr[left].number < arr[right].number) {
			temp.push(arr[left++]);
		} else {
			temp.push(arr[right++]);
		}
	}

	while (left < mid) {
		temp.push(arr[left++]);
	}

	while (right < end) {
		temp.push(arr[right++]);
	}

	for (let i = 0; i < temp.length; i++) {
		arr[start + i] = temp[i];
	}
}

export function mergeSortHelper(
	arr: IdentifiedNumberList,
	start = 0,
	end = arr.length,
	steps: SortSteps<IdentifiedNumber>
): void {
	if (end - start < 2) return;

	const mid = Math.floor((start + end) / 2);
	mergeSortHelper(arr, start, mid, steps);
	mergeSortHelper(arr, mid, end, steps);
	merge(arr, start, mid, end, steps);

	steps.push(createSortStep(arr, {}, { ...steps.at(-1)?.permanentColorMapping }));
}

export function mergeSortWithSteps(arr: IdentifiedNumberList): SortSteps<IdentifiedNumber> {
	const mergeSortSteps: SortSteps<IdentifiedNumber> = [initSortStep(arr)];

	mergeSortHelper(arr, 0, arr.length, mergeSortSteps);

	return mergeSortSteps;
}
