const file = require("./file");
const day = require("./day2");
const parser = file.directions;

describe("Day 2: dive", () => {
  describe("Part 1", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day2/test.txt");
      expect(day.part1(input)).toBe(150);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day2/carol.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day2/expected-part1-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day2/pulido.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day2/expected-part1-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day2/deheras.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day2/expected-part1-deheras.txt")
      );
    });
  });

  describe("Part 2", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day2/test.txt");
      expect(day.part2(input)).toBe(900);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day2/carol.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day2/expected-part2-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day2/pulido.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day2/expected-part2-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day2/deheras.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day2/expected-part2-deheras.txt")
      );
    });
  });
});
