const file = require("./file");
const dayN = "day12";
const day = require(`./${dayN}`);
const parser = file.paths;

(async () => {
  const input = await parser(`./${dayN}/carol.txt`);
  const result = day.part2(input);
  console.log(result);
})();
