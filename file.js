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

module.exports.intLine = async (path) => {
  return (await this.file(path)).split(",").map((v) => parseInt(v));
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

module.exports.segments = async (path) => {
  const file = await this.array(path);
  const segments = [];
  let max = 0;
  for (let pair of file) {
    const [point1, point2] = pair.split(" -> ");
    const point1Numbers = point1.split(",").map((v) => parseInt(v));
    const point2Numbers = point2.split(",").map((v) => parseInt(v));
    segments.push([point1Numbers, point2Numbers]);
    max = Math.max(max, ...point1Numbers, ...point2Numbers);
  }
  return [segments, max];
};

module.exports.sevenSegments = async (path) => {
  const array = await this.array(path);
  return array.map((v) => {
    const [digits, numbers] = v.split(" | ");
    return {
      digits: digits.trim().split(" "),
      numbers: numbers.trim().split(" "),
    };
  });
};

module.exports.paths = async (path) => {
  const array = await this.array(path);
  return array.map((v) => v.split("-"));
};

module.exports.dotsOnPaper = async (path) => {
  const txt = await this.file(path);
  const arr = txt.split("\n");
  let foundSkip = false;
  const result = { dots: [], instructions: [] };
  for (let el of arr) {
    if (el === "") {
      foundSkip = true;
      continue;
    }
    if (!foundSkip) {
      result.dots.push(el.split(",").map((v) => parseInt(v)));
    } else {
      const [axis, index] = el.replace("fold along ", "").split("=");
      result.instructions.push({ axis, index });
    }
  }
  return result;
};

module.exports.polymerization = async (path) => {
  const [polymer, ...instructions] = await this.array(path);
  const result = { polymer, instructions: {} };
  for (let instruction of instructions) {
    const [source, add] = instruction.split(" -> ");
    result.instructions[source] = add;
  }
  return result;
};

const getAdjacent = (numbers, x, y) => {
  const adjacent = {};
  if (y > 0) {
    adjacent[`${x},${y - 1}`] = numbers[x][y - 1];
  }
  if (y < numbers.length - 1) {
    adjacent[`${x},${y + 1}`] = numbers[x][y + 1];
  }
  if (x > 0) {
    adjacent[`${x - 1},${y}`] = numbers[x - 1][y];
  }
  if (x < numbers[0].length - 1) {
    adjacent[`${x + 1},${y}`] = numbers[x + 1][y];
  }
  return adjacent;
};

module.exports.graph = async (path) => {
  const matrix = await this.matrix(path);
  const graph = {};
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      graph[`${x},${y}`] = getAdjacent(matrix, x, y);
      if (x === matrix[0].length - 1 && y === matrix.length - 1) {
        graph.end = `${x},${y}`;
      }
    }
  }
  return graph;
};

const plus1 = (matrix) => {
  return matrix.map((row) => row.map((v) => (v + 1 <= 9 ? v + 1 : 1)));
};

// This is trash and my brain is goo
module.exports.graph2 = async (path) => {
  const matrix = await this.matrix(path);
  const nextMatrix = [[matrix]];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      if (!nextMatrix[y]) {
        nextMatrix[y] = [];
      }
      if (!nextMatrix[y]?.[x]) {
        if (x == 0) {
          nextMatrix[y][x] = plus1(nextMatrix[y - 1][x]);
        } else {
          nextMatrix[y][x] = plus1(nextMatrix[y][x - 1]);
        }
      }
    }
  }
  const finalMatrix = [];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const currMatrix = nextMatrix[y][x];
      for (let i in currMatrix) {
        if (!finalMatrix[y * matrix.length + parseInt(i)]) {
          finalMatrix.push([]);
        }
        finalMatrix[y * matrix.length + parseInt(i)].push(
          ...currMatrix[parseInt(i)]
        );
      }
    }
  }
  const graph = {};
  for (let y = 0; y < finalMatrix.length; y++) {
    for (let x = 0; x < finalMatrix[0].length; x++) {
      graph[`${x},${y}`] = getAdjacent(finalMatrix, x, y);
      if (x === finalMatrix[0].length - 1 && y === finalMatrix.length - 1) {
        graph.end = `${x},${y}`;
      }
    }
  }
  return graph;
};
