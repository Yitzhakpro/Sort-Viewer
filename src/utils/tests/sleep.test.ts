import { describe, it, expect } from "vitest";
import { sleep } from "../sleep";

describe("Sleep utils", () => {
  describe("sleep", () => {
    it("Should resolve the promise a specific given milliseconds", async () => {
      const milliseconds = 40;

      const start = Date.now();
      await sleep(milliseconds);
      const end = Date.now();

      const duration = end - start;
      expect(duration).toBeGreaterThanOrEqual(milliseconds);
    });
  });
});
