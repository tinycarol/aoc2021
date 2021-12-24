const file = require("./file");
const dayN = "day15";
const day = require(`./${dayN}`);
const parser = file.graph2;
const say = require("say");

(async () => {
  const input = await parser(`./${dayN}/carol.txt`);
  const result = day.part1(input);
  say.speak("Ey loka que he acabado");
  console.log(result);
})();
