import { nanoid } from 'nanoid';
import type { IdentifiedNumberList } from '../../types';

export const UNSORTED_IDENTIFED_ARRAY_EXAMPLE: IdentifiedNumberList = [
	{ id: nanoid(), number: 5 },
	{ id: nanoid(), number: 2 },
	{ id: nanoid(), number: 1 },
	{ id: nanoid(), number: 3 },
];
