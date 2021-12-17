const getAdjacent = (numbers, x, y) => {
  const adjacent = [];
  if (y > 0) {
    adjacent.push({ x: x, y: y - 1, value: numbers[y - 1][x] });
  }
  if (y < numbers.length - 1) {
    adjacent.push({ x: x, y: y + 1, value: numbers[y + 1][x] });
  }
  if (x > 0) {
    adjacent.push({ x: x - 1, y: y, value: numbers[y][x - 1] });
  }
  if (x < numbers[0].length - 1) {
    adjacent.push({ x: x + 1, y, value: numbers[y][x + 1] });
  }
  return adjacent;
};

const getAdjacentHeights = (numbers, x, y) => {
  return getAdjacent(numbers, x, y).map((v) => v.value);
};

module.exports.part1 = (input) => {
  return input
    .map((row, y) =>
      row
        .map((n, x) => {
          const adjacent = getAdjacentHeights(input, x, y);
          if (adjacent.every((adjacentPoint) => adjacentPoint > n)) {
            return 1 + n;
          } else {
            return 0;
          }
        })
        .reduce((a, v) => a + v, 0)
    )
    .reduce((a, v) => a + v, 0);
};

const getBasin = (map, lowPoint) => {
  const basin = {};
  const adjacent = [lowPoint];
  while (adjacent.length > 0) {
    const adjacentPoint = adjacent.pop();
    if (
      adjacentPoint.value < 9 &&
      !basin[`${adjacentPoint.x}${adjacentPoint.y}`]
    ) {
      basin[`${adjacentPoint.x}${adjacentPoint.y}`] = true;
      adjacent.push(...getAdjacent(map, adjacentPoint.x, adjacentPoint.y));
    }
  }
  return basin;
};

module.exports.part2 = (input) => {
  const lowPoints = input.flatMap((row, y) =>
    row
      .map((v, x) => ({ x: x, y: y, value: v }))
      .filter(({ x, y, value }) => {
        const adjacent = getAdjacent(input, x, y);
        return adjacent.every((adjacentPoint) => adjacentPoint.value > value);
      })
  );

  const basins = lowPoints.map((lowPoint) => getBasin(input, lowPoint));

  return basins
    .map((basin) => Object.keys(basin).length)
    .sort((v1, v2) => v2 - v1)
    .slice(0, 3)
    .reduce((a, v) => a * v, 1);
};
