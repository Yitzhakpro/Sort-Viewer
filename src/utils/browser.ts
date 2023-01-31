export const isMobileScreen = (): boolean => {
  return Math.min(window.screen.width, window.screen.height) < 768;
};
