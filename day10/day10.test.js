const file = require("../file");
const day10 = require(".");
const parser = file.array;

describe("Day 10: brackets", () => {
  describe("Part 1: broken char", () => {
    it("Works with test input", async () => {
      const input = await parser("./day10/test.txt");
      expect(day10.part1(input)).toBe(26397);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day10/carol.txt");
      expect(day10.part1(input)).toBe(413733);
    });
  });

  describe("Part 2: basins", () => {
    it("Works with test input", async () => {
      const input = await parser("./day10/test.txt");
      expect(day10.part2(input)).toBe(288957);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day10/carol.txt");
      expect(day10.part2(input)).toBe(3354640192);
    });
  });
});
