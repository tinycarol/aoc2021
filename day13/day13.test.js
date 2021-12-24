const file = require("../file");
const day13 = require(".");
const parser = file.dotsOnPaper;

describe("Day 13: folding paper", () => {
  describe("Part 1: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day13/test.txt");
      expect(day13.part1(input)).toBe(17);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day13/carol.txt");
      expect(day13.part1(input)).toBe(716);
    });
  });

  describe("Part 2: ", () => {
    it("Works with test input", async () => {
      const input = await parser("./day13/test.txt");
      expect(day13.part2(input)).toBe(`# # # # #
# . . . #
# . . . #
# . . . #
# # # # #`);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./day13/carol.txt");
      expect(day13.part2(input))
        .toBe(`# # # . . # # # . . . # # . . # . . # . # # # # . # # # . . # . . . . # # # .
# . . # . # . . # . # . . # . # . # . . # . . . . # . . # . # . . . . # . . #
# . . # . # . . # . # . . . . # # . . . # # # . . # # # . . # . . . . # . . #
# # # . . # # # . . # . . . . # . # . . # . . . . # . . # . # . . . . # # # .
# . # . . # . . . . # . . # . # . # . . # . . . . # . . # . # . . . . # . # .
# . . # . # . . . . . # # . . # . . # . # . . . . # # # . . # # # # . # . . #`);
    });
  });
});
