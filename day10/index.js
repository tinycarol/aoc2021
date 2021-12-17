const scores = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const incompleteScores = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

const match = {
  ")": "(",
  "]": "[",
  "}": "{",
  ">": "<",
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const getScoreOrMissing = (line) => {
  const chars = line.split("");
  const filled = [];
  let mismatch;
  for (let char of chars) {
    switch (char) {
      case "(":
      case "[":
      case "<":
      case "{":
        filled.push(char);
        break;
      case ")":
      case "]":
      case ">":
      case "}":
        const lastAdded = filled.pop();
        if (lastAdded !== match[char]) {
          mismatch = char;
        }
    }
    if (mismatch) {
      break;
    }
  }
  return mismatch ? scores[mismatch] : filled.map((v) => match[v]).reverse();
};

module.exports.part1 = (input) => {
  return input
    .map((line) => getScoreOrMissing(line))
    .filter((v) => !Array.isArray(v))
    .reduce((a, v) => a + v, 0);
};

const getIncompleteScore = (chars) => {
  let score = 0;
  for (let char of chars) {
    score *= 5;
    score += incompleteScores[char];
  }
  return score;
};

module.exports.part2 = (input) => {
  let result = input
    .map((line) => getScoreOrMissing(line))
    .filter((v) => Array.isArray(v))
    .map((v) => getIncompleteScore(v))
    .sort((v1, v2) => v1 - v2);
  return result[Math.floor(result.length / 2)];
};
