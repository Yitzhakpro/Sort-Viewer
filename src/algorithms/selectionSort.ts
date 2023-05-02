import { createSortStep, initSortStep } from '../utils';
import type { IdentifiedNumber, IdentifiedNumberList, SortSteps } from '../types';

export function selectionSortWithSteps(arr: IdentifiedNumberList): SortSteps<IdentifiedNumber> {
	const arrSize = arr.length;
	const selectionSortSteps: SortSteps<IdentifiedNumber> = [initSortStep(arr)];

	for (let i = 0; i < arrSize; i++) {
		let min = i;
		for (let j = i + 1; j < arrSize; j++) {
			selectionSortSteps.push(
				createSortStep(
					arr,
					{ [j]: 'CHECK', [min]: 'PIVOT' },
					{ ...selectionSortSteps.at(-1)?.permanentColorMapping }
				)
			);
			if (arr[j].number < arr[min].number) {
				min = j;
				selectionSortSteps.push(
					createSortStep(
						arr,
						{ [j]: 'CHECK', [min]: 'PIVOT' },
						{ ...selectionSortSteps.at(-1)?.permanentColorMapping }
					)
				);
			}
		}

		if (min !== i) {
			selectionSortSteps.push(
				createSortStep(
					arr,
					{ [min]: 'SWAPPING', [i]: 'SWAPPING' },
					{ ...selectionSortSteps.at(-1)?.permanentColorMapping }
				)
			);
			const temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
			selectionSortSteps.push(
				createSortStep(
					arr,
					{ [min]: 'SWAPPING', [i]: 'SWAPPING' },
					{ ...selectionSortSteps.at(-1)?.permanentColorMapping }
				)
			);
		}

		selectionSortSteps.push(
			createSortStep(
				arr,
				{},
				{ ...selectionSortSteps.at(-1)?.permanentColorMapping, [i]: 'SORTED' }
			)
		);
	}

	selectionSortSteps.push(createSortStep(arr, {}, {}));

	return selectionSortSteps;
}
