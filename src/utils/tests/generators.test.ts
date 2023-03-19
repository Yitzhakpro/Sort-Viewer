import { describe, it, expect } from "vitest";
import { genRandomNumber, generateIdentifiedNumberList } from "../generators";

describe("Generators Utils", () => {
  describe("genRandomNumber", () => {
    it("Should generate a random number between given min and max", () => {
      const minMaxes = [
        [0, 100],
        [0, 5],
        [20, 50],
        [0, 2],
      ];

      for (const minMax of minMaxes) {
        const min = minMax[0];
        const max = minMax[1];

        const randomNumber = genRandomNumber(min, max);

        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).not.toBeGreaterThan(max);
      }
    });
  });

  describe("generateIdentifiedNumberList", () => {
    it("Should generate an array with 5 elements when given no length", () => {
      const generatedArray = generateIdentifiedNumberList();

      expect(generatedArray.length).toBe(5);
    });

    it("Should generate an array of given size N", () => {
      const size = 20;

      const generatedArray = generateIdentifiedNumberList(size);

      expect(generatedArray.length).toBe(size);
    });

    it("Should generate an array with each element contains id and number properties", () => {
      const generatedArray = generateIdentifiedNumberList();

      for (const element of generatedArray) {
        expect(element).toHaveProperty("id");
        expect(element.id).toBeTypeOf("string");
        expect(element).toHaveProperty("number");
        expect(element.number).toBeTypeOf("number");
      }
    });
  });
});
