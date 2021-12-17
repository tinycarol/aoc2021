const file = require("../file");
const day6 = require("./day6");
const parser = file.intLine;

describe("Day 6: fishies", () => {
  describe("Part 1: short time", () => {
    it("Works with test input", async () => {
      const input = await parser("./day6/test.txt");
      expect(day6.part1and2(input, 80)).toBe(5934);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day6/carol.txt");
      expect(day6.part1and2(input, 80)).toBe(373378);
    });
  });

  describe("Part 2: long time", () => {
    it("Works with test input", async () => {
      const input = await parser("./day6/test.txt");
      expect(day6.part1and2(input, 256)).toBe(26984457539);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day6/carol.txt");
      expect(day6.part1and2(input, 256)).toBe(1682576647495);
    });
  });
});
