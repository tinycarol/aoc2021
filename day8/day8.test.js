const file = require("../file");
const day8 = require(".");
const parser = file.sevenSegments;

describe("Day 6: seven segments", () => {
  describe("Part 1: count unique sets", () => {
    it("Works with test input", async () => {
      const input = await parser("./day8/test.txt");
      expect(day8.part1(input)).toBe(26);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day8/carol.txt");
      expect(day8.part1(input)).toBe(495);
    });
  });

  describe("Part 2: decode", () => {
    it("Works with test input", async () => {
      const input = await parser("./day8/test.txt");
      expect(day8.part2(input)).toBe(61229);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day8/carol.txt");
      expect(day8.part2(input)).toBe(1055164);
    });
  });
});
