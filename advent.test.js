const file = require("./file");
const day1 = require("./day1");

describe("Advent of Code", () => {
  describe("Day 1: radar", () => {
    describe("Part 1", () => {
      it("Works with test input", async () => {
        const input = await file.ints("./data/day1/test.txt");
        expect(day1.part1(input)).toBe(7);
      });

      it("Works with carol's input", async () => {
        const input = await file.ints("./data/day1/carol.txt");
        expect(day1.part1(input)).toBe(1616);
      });

      it("Works with ruben pulido's input", async () => {
        const input = await file.ints("./data/day1/pulido.txt");
        expect(day1.part1(input)).toBe(1616);
      });

      it("Works with ruben de heras's input", async () => {
        const input = await file.ints("./data/day1/deheras.txt");
        expect(day1.part1(input)).toBe(1616);
      });
    });

    describe("Part 2", () => {
      it("Works with test input", async () => {
        const input = await file.ints("./data/day1/test.txt");
        expect(day1.part2(input)).toBe(5);
      });

      it("Works with carol's input", async () => {
        const input = await file.ints("./data/day1/carol.txt");
        expect(day1.part2(input)).toBe(1645);
      });

      it("Works with ruben pulido's input", async () => {
        const input = await file.ints("./data/day1/pulido.txt");
        expect(day1.part1(input)).toBe(1616);
      });

      it("Works with ruben de heras's input", async () => {
        const input = await file.ints("./data/day1/deheras.txt");
        expect(day1.part1(input)).toBe(1616);
      });
    });
  });
});