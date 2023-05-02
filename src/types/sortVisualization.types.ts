export type SortAlgorithm =
	| 'bubbleSort'
	| 'insertionSort'
	| 'selectionSort'
	| 'mergeSort'
	| 'quickSort';

export type ColorMappingType = 'CHECK' | 'PIVOT' | 'SWAPPING' | 'SORTED';

export type ColorMapping = Record<number, ColorMappingType>;

export interface SortStep<T> {
	array: T[];
	colorMapping: ColorMapping;
	permanentColorMapping: ColorMapping;
}

export type SortSteps<T> = Array<SortStep<T>>;
