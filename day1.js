module.exports.part1 = (input) => {
  let increases = 0;
  let previous = undefined;
  for (let i = 0; i < input.length; i++) {
    let current = input[i];

    if (previous === undefined) {
      previous = current;
      continue;
    }

    if (current > previous) {
      increases++;
    }

    previous = current;
  }

  return increases;
};

module.exports.part2 = (input) => {
  let increases = 0;
  let previous = undefined;
  for (let i = 0; i < input.length - 2; i++) {
    let current = input[i] + input[i + 1] + input[i + 2];

    if (previous === undefined) {
      previous = current;
      continue;
    }

    if (current > previous) {
      increases++;
    }

    previous = current;
  }

  return increases;
};
