module.exports.part1 = (input) => {
  const finalCoordinates = input.reduce(
    (acc, current) => {
      const [direction, amount] = current.split(" ");
      switch (direction) {
        case "forward":
          acc.x += parseInt(amount);
          break;
        case "down":
          acc.y += parseInt(amount);
          break;
        case "up":
          acc.y -= parseInt(amount);
          break;
      }
      return acc;
    },
    { x: 0, y: 0 }
  );
  return finalCoordinates.x * finalCoordinates.y;
};

module.exports.part2 = (input) => {
  const finalCoordinates = input.reduce(
    (acc, current) => {
      const [direction, amount] = current.split(" ");
      switch (direction) {
        case "forward":
          acc.x += parseInt(amount);
          acc.y += acc.aim * parseInt(amount);
          break;
        case "down":
          acc.aim += parseInt(amount);
          break;
        case "up":
          acc.aim -= parseInt(amount);
          break;
      }
      return acc;
    },
    { x: 0, y: 0, aim: 0 }
  );

  return finalCoordinates.x * finalCoordinates.y;
};
