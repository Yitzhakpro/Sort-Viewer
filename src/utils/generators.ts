export const genRandomNumber = (min = 0, max = 100): number => {
  return Math.random() * (max - min) + min;
};

export const generateNumberArray = (
  length = 5,
  min = 0,
  max = 100
): number[] => {
  return Array.from({ length }, () => genRandomNumber(min, max));
};
