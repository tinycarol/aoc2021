const file = require("../file");
const day5 = require("./day5");
const parser = file.segments;

describe("Day 5: Hydrothermal Venture", () => {
  describe("Part 1: no diagonals", () => {
    it("Works with test input", async () => {
      const input = await file.segments("./day5/test.txt");
      expect(day5.part1(input)).toBe(5);
    });

    it("Works with carol's input", async () => {
      const input = await file.segments("./day5/carol.txt");
      expect(day5.part1(input)).toBe(5084);
    });
  });

  describe("Part 2: yes diagonals", () => {
    it("Works with test input", async () => {
      const input = await file.segments("./day5/test.txt");
      expect(day5.part2(input)).toBe(12);
    });

    it("Works with carol's input", async () => {
      const input = await file.segments("./day5/carol.txt");
      expect(day5.part2(input)).toBe(17882);
    });
  });
});
