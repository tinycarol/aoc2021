module.exports.part1 = (input) => {
  const gamma = new Array(input[0].length).fill(0);
  const epsilon = [...gamma];

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      gamma[col] += input[row][col];

      if (row === input.length - 1) {
        gamma[col] = gamma[col] > Math.floor(input.length / 2) ? "1" : "0";
        epsilon[col] = gamma[col] === "1" ? "0" : "1";
      }
    }
  }

  const gammaDecimal = parseInt(gamma.join(""), 2);
  const epsilonDecimal = parseInt(epsilon.join(""), 2);

  return gammaDecimal * epsilonDecimal;
};

const calculateOxygenRating = (input) => {
  let measurements = input.map((i) => [...i]);

  let currentIndex = 0;

  while (measurements.length > 1 && currentIndex < input[0].length) {
    const numberOfOnes = measurements.reduce(
      (acc, value) => acc + value[currentIndex],
      0
    );
    const majorityBit = numberOfOnes >= measurements.length / 2 ? 1 : 0;
    measurements = measurements.filter((v) => v[currentIndex] === majorityBit);
    currentIndex++;
  }
  return parseInt(measurements[0].join(""), 2);
};

const calculateCO2Rating = (input) => {
  let measurements = input.map((i) => [...i]);

  let currentIndex = 0;

  while (measurements.length > 1 && currentIndex < input[0].length) {
    const numberOfOnes = measurements.reduce(
      (acc, value) => acc + value[currentIndex],
      0
    );
    const minorityBit = numberOfOnes >= measurements.length / 2 ? 0 : 1;
    measurements = measurements.filter((v) => v[currentIndex] === minorityBit);
    currentIndex++;
  }
  return parseInt(measurements[0].join(""), 2);
};

module.exports.part2 = (input) => {
  const oxygenRating = calculateOxygenRating(input);
  const co2Rating = calculateCO2Rating(input);

  return oxygenRating * co2Rating;
};
