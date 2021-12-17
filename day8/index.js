const uniqueLengths = [2, 4, 3, 7];

const charOccurrences = (digits) => {
  return digits
    .join("")
    .split("")
    .reduce((acc, v) => {
      if (!(v in acc)) {
        acc[v] = 0;
      }
      acc[v]++;
      return acc;
    }, {});
};

module.exports.part1 = (input) => {
  return input.reduce((a, v) => {
    return a + v.numbers.filter((n) => uniqueLengths.includes(n.length)).length;
  }, 0);
};

const getA = (numbers) => {
  const num1 = numbers.find((v) => v.length === 2);
  const num7 = numbers.find((v) => v.length === 3);
  for (let char of num7) {
    if (!num1.includes(char)) {
      return char;
    }
  }
};

const sameSet = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

const parseNumber = (input) => {
  const occurrences = charOccurrences(input.digits);
  const segment1 = getA(input.digits);
  const segment2 = Object.entries(occurrences).find(
    ([_, occurrence]) => occurrence === 6
  )[0];
  const segment3 = Object.entries(occurrences).find(
    ([char, occurrence]) => char !== segment1 && occurrence === 8
  )[0];
  const segment4 = Object.entries(occurrences).find(
    ([digit, occurrence]) =>
      occurrence === 7 &&
      input.digits.find((v) => v.length === 4).includes(digit)
  )[0];
  const segment5 = Object.entries(occurrences).find(
    ([_, occurrence]) => occurrence === 4
  )[0];
  const segment6 = Object.entries(occurrences).find(
    ([_, occurrence]) => occurrence === 9
  )[0];
  const segment7 = Object.entries(occurrences).find(
    ([digit, occurrence]) =>
      occurrence === 7 &&
      !input.digits.find((v) => v.length === 4).includes(digit)
  )[0];

  const number0 = new Set([
    segment1,
    segment2,
    segment3,
    segment5,
    segment6,
    segment7,
  ]);
  const number2 = new Set([segment1, segment3, segment4, segment5, segment7]);
  const number3 = new Set([segment1, segment3, segment4, segment6, segment7]);
  const number5 = new Set([segment1, segment2, segment4, segment6, segment7]);
  const number6 = new Set([
    segment1,
    segment2,
    segment4,
    segment5,
    segment6,
    segment7,
  ]);
  const number9 = new Set([
    segment1,
    segment2,
    segment3,
    segment4,
    segment6,
    segment7,
  ]);

  const numbers = input.numbers;
  let result = "";
  for (let number of numbers) {
    let char;
    switch (number.length) {
      case 2:
        char = 1;
        break;
      case 4:
        char = 4;
        break;
      case 3:
        char = 7;
        break;
      case 7:
        char = 8;
        break;
      default:
        const numberSet = new Set(number.split(""));
        if (sameSet(numberSet, number0)) {
          char = 0;
        } else if (sameSet(numberSet, number2)) {
          char = 2;
        } else if (sameSet(numberSet, number3)) {
          char = 3;
        } else if (sameSet(numberSet, number5)) {
          char = 5;
        } else if (sameSet(numberSet, number6)) {
          char = 6;
        } else if (sameSet(numberSet, number9)) {
          char = 9;
        }
    }
    result = `${result}${char}`;
  }

  return parseInt(result);
};

module.exports.part2 = (input) => {
  return input.reduce((acc, v) => {
    return acc + parseNumber(v);
  }, 0);
};
