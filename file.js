const fs = require("fs");

module.exports.file = async (path) => {
  return fs.readFileSync(path, "utf8");
};

module.exports.array = async (path) => {
  return (await this.file(path)).split("\n").filter((v) => v !== "");
};

module.exports.ints = async (path) => {
  return (await this.array(path)).map((v) => parseInt(v));
};

module.exports.matrix = async (path) => {
  return (await this.array(path)).map((v) =>
    v.split("").map((c) => parseInt(c))
  );
};

module.exports.bingo = async (path) => {
  const file = await this.array(path);
  const bingo = {
    numbers: file[0].split(",").map((v) => parseInt(v)),
    cards: [],
  };
  let cardCounter = -1;

  for (let i = 1; i < file.length; i++) {
    if ((i - 1) % 5 === 0) {
      cardCounter++;
      bingo.cards.push([]);
    }
    bingo.cards[cardCounter].push(
      file[i]
        .replaceAll("  ", " ")
        .trim()
        .split(" ")
        .map((v) => parseInt(v.trim()))
    );
  }

  return bingo;
};
