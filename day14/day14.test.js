const file = require("../file");
const day14 = require(".");
const parser = file.polymerization;

describe("Day 14: Extended Polymerization", () => {
  describe("Part 1: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day14/test.txt");
      expect(day14.part1(input)).toBe(1588);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day14/carol.txt");
      expect(day14.part1(input)).toBe(2584);
    });
  });

  describe("Part 2: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day14/test.txt");
      expect(day14.part2(input)).toBe(2188189693529);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day14/carol.txt");
      expect(day14.part2(input)).toBe(3816397135460);
    });
  });
});
