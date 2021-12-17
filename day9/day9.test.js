const file = require("../file");
const day9 = require(".");
const parser = file.matrix;

describe("Day 9: smoke", () => {
  describe("Part 1: low points", () => {
    it("Works with test input", async () => {
      const input = await parser("./day9/test.txt");
      expect(day9.part1(input)).toBe(15);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day9/carol.txt");
      expect(day9.part1(input)).toBe(475);
    });
  });

  describe("Part 2: basins", () => {
    it("Works with test input", async () => {
      const input = await parser("./day9/test.txt");
      expect(day9.part2(input)).toBe(1134);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day9/carol.txt");
      expect(day9.part2(input)).toBe(1092012);
    });
  });
});
