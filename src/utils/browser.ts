export const isMobileScreen = (screenHeight: number, screenWidth: number): boolean => {
	return Math.min(screenWidth, screenHeight) < 750;
};
