const file = require("../file");
const day15 = require(".");
const parser = file.graph;
const parser2 = file.graph2;

describe("Day 15: Chiton", () => {
  describe("Part 1: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day15/test.txt");
      expect(day15.part1(input)).toBe(40);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day15/carol.txt");
      expect(day15.part1(input)).toBe(656);
    });
  });

  describe("Part 2: ", () => {
    it("Works with test input", async () => {
      const input = await parser2("./day15/test.txt");
      expect(day15.part2(input)).toBe(315);
    });

    it("Works with carol's input", async () => {
      const input = await parser2("./day15/carol.txt");
      expect(day15.part2(input)).toBe(2979);
    });
  });
});
