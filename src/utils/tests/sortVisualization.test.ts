import { describe, it, expect } from 'vitest';
import { createSortStep, initSortStep } from '../sortVisualization';
import type { ColorMapping } from '../../types';

describe('Sort Visualization Utils', () => {
	describe('initSortStep', () => {
		it('Should create a first sort step, containing starting array with no color mapping', () => {
			const arr = [1, 4, 5, 2, 8];

			const startSortStep = initSortStep(arr);

			expect(startSortStep).toHaveProperty('array');
			expect(startSortStep.array).toEqual(arr);
			expect(startSortStep).toHaveProperty('colorMapping');
			expect(startSortStep.colorMapping).toEqual({});
			expect(startSortStep).toHaveProperty('permanentColorMapping');
			expect(startSortStep.permanentColorMapping).toEqual({});
		});
	});

	describe('createSortStep', () => {
		it('Should return a sort step with given array, colorMapping and permanentColorMapping', () => {
			const arr = [1, 4, 5, 2, 8];
			const colorMapping: ColorMapping = { 0: 'CHECK', 1: 'CHECK' };
			const permanentColorMapping: ColorMapping = {};

			const sortStep = createSortStep(arr, colorMapping, permanentColorMapping);

			expect(sortStep).toHaveProperty('array');
			expect(sortStep.array).toEqual(arr);
			expect(sortStep).toHaveProperty('colorMapping');
			expect(sortStep.colorMapping).toEqual(colorMapping);
			expect(sortStep).toHaveProperty('permanentColorMapping');
			expect(sortStep.permanentColorMapping).toEqual(permanentColorMapping);
		});
	});
});
