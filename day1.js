module.exports.part1 = (input) => {
  return input.reduce(
    (acc, current) => {
      if (current > acc.previous) {
        acc.sum += 1;
      }
      acc.previous = current;
      return acc;
    },
    { previous: input[0], sum: 0 }
  ).sum;
};

module.exports.part2 = (input) => {
  return input.slice(0, input.length - 2).reduce(
    (acc, current, index) => {
      const currentSum = current + input[index + 1] + input[index + 2];
      if (currentSum > acc.previous) {
        acc.sum += 1;
      }
      acc.previous = currentSum;
      return acc;
    },
    { previous: input[0] + input[1] + input[2], sum: 0 }
  ).sum;
};
