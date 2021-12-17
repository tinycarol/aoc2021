const file = require("../file");
const day4 = require("./day4");

describe("Day 4: squid bingo", () => {
  describe("Part 1: winner", () => {
    it("Works with test input", async () => {
      const input = await file.bingo("./day4/test.txt");
      expect(day4.part1(input)).toBe(4512);
    });

    it("Works with carol's input", async () => {
      const input = await file.bingo("./day4/carol.txt");
      expect(day4.part1(input)).toBe(25410);
    });

    it("Works with pulido's input", async () => {
      const input = await file.bingo("./day4/pulido.txt");
      expect(day4.part1(input)).toBe(10680);
    });
  });

  describe("Part 2: last winning card", () => {
    it("Works with test input", async () => {
      const input = await file.bingo("./day4/test.txt");
      expect(day4.part2(input)).toBe(1924);
    });

    it("Works with carol's input", async () => {
      const input = await file.bingo("./day4/carol.txt");
      expect(day4.part2(input)).toBe(2730);
    });

    it("Works with pulido's input", async () => {
      const input = await file.bingo("./day4/pulido.txt");
      expect(day4.part2(input)).toBe(31892);
    });
  });
});
