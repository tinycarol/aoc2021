const file = require("../file");
const day1 = require("./day1");

describe("Day 1: radar", () => {
  describe("Part 1: one value", () => {
    it("Works with test input", async () => {
      const input = await file.ints("./day1/test.txt");
      expect(day1.part1(input)).toBe(7);
    });

    it("Works with carol's input", async () => {
      const input = await file.ints("./day1/carol.txt");
      expect(day1.part1(input)).toBe(1616);
    });
  });

  describe("Part 2: sliding window", () => {
    it("Works with test input", async () => {
      const input = await file.ints("./day1/test.txt");
      expect(day1.part2(input)).toBe(5);
    });

    it("Works with carol's input", async () => {
      const input = await file.ints("./day1/carol.txt");
      expect(day1.part2(input)).toBe(1645);
    });
  });
});
