import { nanoid } from 'nanoid';
import {
	DEFAULT_RANDOM_ARRAY_LENGTH,
	DEFAULT_MIN_RANDOM_NUMBER,
	DEFAULT_MAX_RANDOM_NUMBER,
} from '../constants';
import type { IdentifiedNumberList } from '../types';

export const genRandomNumber = (
	min = DEFAULT_MIN_RANDOM_NUMBER,
	max = DEFAULT_MAX_RANDOM_NUMBER
): number => {
	return Math.floor(Math.random() * (max - min) + min);
};

export const generateIdentifiedNumberList = (
	length = DEFAULT_RANDOM_ARRAY_LENGTH,
	min = DEFAULT_MIN_RANDOM_NUMBER,
	max = DEFAULT_MAX_RANDOM_NUMBER
): IdentifiedNumberList => {
	return Array.from({ length }, () => {
		const id = nanoid();
		const number = genRandomNumber(min, max);

		return { id, number };
	});
};
