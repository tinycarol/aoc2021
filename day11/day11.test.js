const file = require("../file");
const day11 = require(".");
const parser = file.matrix;

describe("Day 11: flashes", () => {
  describe("Part 1: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day11/test.txt");
      expect(day11.part1(input)).toBe(1656);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day11/carol.txt");
      expect(day11.part1(input)).toBe(1702);
    });
  });

  describe("Part 2: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day11/test.txt");
      expect(day11.part2(input)).toBe(195);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day11/carol.txt");
      expect(day11.part2(input)).toBe(251);
    });
  });
});
