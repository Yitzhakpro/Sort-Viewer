import { describe, it, expect } from 'vitest';
import { isMobileScreen } from '../browser';

describe('Browser Utils', () => {
	describe('isMobileScreen', () => {
		it("Should return 'true' if height or width are below 750", () => {
			const heightAboveThreshold = 900;
			const widthBelowThreshold = 700;
			const heightBelowThreshold = 700;
			const widthAboveThreshold = 900;

			const heightAboveWidthBelowResult = isMobileScreen(heightAboveThreshold, widthBelowThreshold);
			const heightBelowWidthAboveResult = isMobileScreen(heightBelowThreshold, widthAboveThreshold);

			expect(heightAboveWidthBelowResult).toBeTruthy();
			expect(heightBelowWidthAboveResult).toBeTruthy();
		});

		it("Should return 'false' if height and width are above 750", () => {
			const heightAboveThreshold = 900;
			const widthAboveThreshold = 900;

			const isMobile = isMobileScreen(heightAboveThreshold, widthAboveThreshold);

			expect(isMobile).not.toBeTruthy();
		});
	});
});
