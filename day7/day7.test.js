const file = require("../file");
const day7 = require("./day7");
const parser = file.intLine;

describe("Day 6: crabs", () => {
  describe("Part 1: short time", () => {
    it("Works with test input", async () => {
      const input = await parser("./day7/test.txt");
      expect(day7.part1(input)).toBe(37);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day7/carol.txt");
      expect(day7.part1(input)).toBe(356992);
    });
  });

  describe("Part 2: long time", () => {
    it("Works with test input", async () => {
      const input = await parser("./day7/test.txt");
      expect(day7.part2(input)).toBe(168);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day7/carol.txt");
      expect(day7.part2(input)).toBe(101268110);
    });
  });
});
