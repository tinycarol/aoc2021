const findMax = (numbers) => {
  let max = 0;
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const findMinIndex = (numbers) => {
  let min = numbers[0];
  let minIndex = 0;
  for (let num in numbers) {
    if (numbers[num] < min) {
      min = numbers[num];
      minIndex = num;
    }
  }
  return parseInt(minIndex);
};

const findMin = (numbers) => {
  let min = numbers[0];
  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};

const crabsWithPosition = (crabPositions) => {
  return crabPositions.reduce((acc, crabPosition) => {
    if (!(crabPosition in acc)) {
      acc[crabPosition] = 0;
    }
    acc[crabPosition] += 1;
    return acc;
  }, {});
};

const cache = {};

const summationWithCache = (num) => {
  if (cache[num]) {
    return cache[num];
  }
  cache[num] = 0;
  for (let i = 1; i <= num; i++) {
    cache[num] += i;
  }
  return cache[num];
};

module.exports.part1 = (crabPositions) => {
  const fuelToPosition = new Array(findMax(crabPositions)).fill(0);
  const crabsInPosition = crabsWithPosition(crabPositions);
  for (let position = 0; position < fuelToPosition.length; position++) {
    for (let crabPosition in crabsInPosition) {
      fuelToPosition[position] +=
        crabsInPosition[crabPosition] * Math.abs(crabPosition - position);
    }
  }
  return findMin(fuelToPosition);
};

module.exports.part2 = (crabPositions) => {
  const fuelToPosition = new Array(findMax(crabPositions)).fill(0);
  const crabsInPosition = crabsWithPosition(crabPositions);
  for (let position = 0; position < fuelToPosition.length; position++) {
    for (let crabPosition in crabsInPosition) {
      fuelToPosition[position] +=
        crabsInPosition[crabPosition] *
        summationWithCache(Math.abs(crabPosition - position));
    }
  }
  return findMin(fuelToPosition);
};
