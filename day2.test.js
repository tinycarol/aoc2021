const file = require("./file");
const day2 = require("./day2");

describe("Day 2: navigation", () => {
  describe("Part 1: wasd", () => {
    it("Works with test input", async () => {
      const input = await file.array("./data/day2/test.txt");
      expect(day2.part1(input)).toBe(150);
    });

    it("Works with carol's input", async () => {
      const input = await file.array("./data/day2/carol.txt");
      expect(day2.part1(input)).toBe(2019945);
    });
  });

  describe("Part 2: aiming", () => {
    it("Works with test input", async () => {
      const input = await file.array("./data/day2/test.txt");
      expect(day2.part2(input)).toBe(900);
    });

    it("Works with carol's input", async () => {
      const input = await file.array("./data/day2/carol.txt");
      expect(day2.part2(input)).toBe(1599311480);
    });
  });
});
