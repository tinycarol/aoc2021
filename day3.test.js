const file = require("./file");
const day = require("./day3");
const parser = file.matrix;

describe("Day 3: Binary Diagnostic ", () => {
  describe("Part 1", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day3/test.txt");
      expect(day.part1(input)).toBe(198);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day3/carol.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day3/expected-part1-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day3/pulido.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day3/expected-part1-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day3/deheras.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day3/expected-part1-deheras.txt")
      );
    });
  });

  describe("Part 2", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day3/test.txt");
      expect(day.part2(input)).toBe(230);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day3/carol.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day3/expected-part2-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day3/pulido.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day3/expected-part2-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day3/deheras.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day3/expected-part2-deheras.txt")
      );
    });
  });
});
