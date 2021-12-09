const file = require("./file");
const day = require("./day1");
const parser = file.ints;

describe("Day 1: radar", () => {
  describe("Part 1", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day1/test.txt");
      expect(day.part1(input)).toBe(7);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day1/carol.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day1/expected-part1-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day1/pulido.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day1/expected-part1-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day1/deheras.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day1/expected-part1-deheras.txt")
      );
    });
  });

  describe("Part 2", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day1/test.txt");
      expect(day.part2(input)).toBe(5);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day1/carol.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day1/expected-part2-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day1/pulido.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day1/expected-part2-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day1/deheras.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day1/expected-part2-deheras.txt")
      );
    });
  });
});
