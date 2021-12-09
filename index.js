const file = require("./file");
const day = require("./day4");
const parser = file.bingo;

(async () => {
  // const input = await parser("./data/day4/test.txt");
  const input = await parser("./data/day4/pulido.txt");
  day.part2(input);
})();
