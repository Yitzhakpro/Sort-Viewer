import {
  DEFAULT_RANDOM_ARRAY_LENGTH,
  DEFAULT_MIN_RANDOM_NUMBER,
  DEFAULT_MAX_RANDOM_NUMBER,
} from "../constants";

export const genRandomNumber = (
  min = DEFAULT_MIN_RANDOM_NUMBER,
  max = DEFAULT_MAX_RANDOM_NUMBER
): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const generateNumberArray = (
  length = DEFAULT_RANDOM_ARRAY_LENGTH,
  min = DEFAULT_MIN_RANDOM_NUMBER,
  max = DEFAULT_MAX_RANDOM_NUMBER
): number[] => {
  return Array.from({ length }, () => genRandomNumber(min, max));
};
