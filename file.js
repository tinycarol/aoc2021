const fs = require("fs");

module.exports.file = async (path) => {
  return await fs.readFileSync(path, "utf8");
};

module.exports.array = async (path) => {
  return (await this.file(path)).split("\n").filter((v) => v !== "");
};

module.exports.int = async (path) => {
  return parseInt(await this.file(path));
};

module.exports.ints = async (path) => {
  return (await this.array(path)).map((v) => parseInt(v));
};

module.exports.directions = async (path) => {
  return (await this.array(path))
    .map((v) => v.split(" "))
    .map(([v1, v2]) => [v1, parseInt(v2)]);
};

module.exports.matrix = async (path) => {
  return (await this.array(path)).map((v) =>
    v.split("").map((j) => parseInt(j))
  );
};

module.exports.bingoNumbers = async (path) => {
  return (await this.array(path))[0].split(",").map((j) => parseInt(j));
};

module.exports.bingoCards = async (path) => {
  const temp = (await this.array(path)).slice(1);

  const numberOfCards = temp.length / 5;

  const bingoCards = [];

  for (let i = 0; i < numberOfCards; i++) {
    let bingoCard = temp.slice(i * 5, i * 5 + 5);

    bingoCard = bingoCard.map((v) =>
      v
        .trim()
        .split(/[ ]+/)
        .map((j) => parseInt(j))
    );

    bingoCards.push(bingoCard);
  }

  return bingoCards;
};

module.exports.bingo = async (path) => {
  return {
    bingoCards: await this.bingoCards(path),
    bingoNumbers: await this.bingoNumbers(path),
  };
};
