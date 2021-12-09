const file = require("./file");
const day = require("./day4");
const parser = file.bingo;

describe("Day 4: Bingo ", () => {
  describe("Part 1", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day4/test.txt");
      expect(day.part1(input)).toBe(4512);
    });

    it("Works with test input", async () => {
      const input = await parser("./data/day4/test2.txt");
      expect(day.part1(input)).toBe(1550);
    });

    it("Works with test input", async () => {
      const input = await parser("./data/day4/test3.txt");
      expect(day.part1(input)).toBe(1550);
    });

    it("Works with carol's input", async () => {
      const input = await parser("./data/day4/carol.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day4/expected-part1-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day4/pulido.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day4/expected-part1-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day4/deheras.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day4/expected-part1-deheras.txt")
      );
    });
  });

  describe("Part 2", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day4/test.txt");
      expect(day.part2(input)).toBe(1924);
    });

    it.skip("Works with carol's input", async () => {
      const input = await parser("./data/day4/carol.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day4/expected-part2-carol.txt")
      );
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day4/pulido.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day4/expected-part2-pulido.txt")
      );
    });

    it.skip("Works with ruben de heras's input", async () => {
      const input = await parser("./data/day4/deheras.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day4/expected-part2-deheras.txt")
      );
    });
  });
});
