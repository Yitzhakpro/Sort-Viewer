import { createSortStep, initSortStep } from '../utils';
import type { IdentifiedNumber, IdentifiedNumberList, SortSteps } from '../types';

export function bubbleSortWithSteps(arr: IdentifiedNumberList): SortSteps<IdentifiedNumber> {
	const arrSize = arr.length;
	const bubbleSortSteps: SortSteps<IdentifiedNumber> = [initSortStep(arr)];

	for (let i = 0; i < arrSize - 1; i++) {
		for (let j = 0; j < arrSize - i - 1; j++) {
			bubbleSortSteps.push(
				createSortStep(
					arr,
					{ [j]: 'CHECK', [j + 1]: 'CHECK' },
					{ ...bubbleSortSteps.at(-1)?.permanentColorMapping }
				)
			);
			if (arr[j].number > arr[j + 1].number) {
				bubbleSortSteps.push(
					createSortStep(
						arr,
						{ [j]: 'SWAPPING', [j + 1]: 'SWAPPING' },
						{ ...bubbleSortSteps.at(-1)?.permanentColorMapping }
					)
				);
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
				bubbleSortSteps.push(
					createSortStep(
						arr,
						{ [j]: 'SWAPPING', [j + 1]: 'SWAPPING' },
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
					[arrSize - i - 1]: 'SORTED',
				}
			)
		);
	}

	// adding last index as "done" iterating
	bubbleSortSteps.push(
		createSortStep(
			arr,
			{},
			{
				...bubbleSortSteps.at(-1)?.permanentColorMapping,
				0: 'SORTED',
			}
		)
	);

	// settings color to default
	bubbleSortSteps.push(createSortStep(arr, {}, {}));

	return bubbleSortSteps;
}
