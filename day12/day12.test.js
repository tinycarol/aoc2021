const file = require("../file");
const day12 = require(".");
const parser = file.paths;

describe("Day 12: graph :c", () => {
  describe("Part 1: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day12/test.txt");
      expect(day12.part1(input)).toBe(10);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day12/carol.txt");
      expect(day12.part1(input)).toBe(3292);
    });
  });

  describe("Part 2: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day12/test.txt");
      expect(day12.part2(input)).toBe(36);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day12/carol.txt");
      expect(day12.part2(input)).toBe(89592);
    });
  });
});
