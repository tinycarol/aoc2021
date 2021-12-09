module.exports.part1 = (input) => {
  let x = 0;
  let depth = 0;

  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case "down":
        depth = depth + input[i][1];
        break;
      case "up":
        depth = depth - input[i][1];
        break;
      case "forward":
        x = x + input[i][1];
        break;
    }
  }

  return x * depth;
};

module.exports.part2 = (input) => {
  let x = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case "down":
        aim = aim + input[i][1];
        break;
      case "up":
        aim = aim - input[i][1];
        break;
      case "forward":
        x = x + input[i][1];
        depth = depth + aim * input[i][1];
        break;
    }
  }

  return x * depth;
};
