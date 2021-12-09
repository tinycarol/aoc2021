const file = require("./file");
const day3 = require("./day3");

describe("Day 3: measurements", () => {
  describe("Part 1: power consumption", () => {
    it("Works with test input", async () => {
      const input = await file.matrix("./data/day3/test.txt");
      expect(day3.part1(input)).toBe(198);
    });

    it("Works with carol's input", async () => {
      const input = await file.matrix("./data/day3/carol.txt");
      expect(day3.part1(input)).toBe(3309596);
    });
  });

  describe("Part 2: life support rating", () => {
    it("Works with test input", async () => {
      const input = await file.matrix("./data/day3/test.txt");
      expect(day3.part2(input)).toBe(230);
    });

    it("Works with carol's input", async () => {
      const input = await file.matrix("./data/day3/carol.txt");
      expect(day3.part2(input)).toBe(2981085);
    });
  });
});
