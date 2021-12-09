module.exports.part1 = (input) => {
  const numberOfColumns = input[0].length;
  const numberOfRows = input.length;

  let gammaResultArray = [];
  let epsilonResultArray = [];

  for (j = 0; j < numberOfColumns; j++) {
    var counter = 0;
    for (let i = 0; i < input.length; i++) {
      counter = counter + input[i][j];
    }
    if (counter >= numberOfRows / 2) {
      gammaResultArray[j] = 1;
      epsilonResultArray[j] = 0;
    } else {
      gammaResultArray[j] = 0;
      epsilonResultArray[j] = 1;
    }
  }

  let gammaDecimal = parseInt(gammaResultArray.join(""), 2);
  let epsilonDecimal = parseInt(epsilonResultArray.join(""), 2);

  return gammaDecimal * epsilonDecimal;
};

module.exports.part2 = (input) => {
  const numberOfColumns = input[0].length;

  let oxygenResultArray = [];
  let nextOxygenInput = input;
  for (j = 0; j < numberOfColumns; j++) {
    if (nextOxygenInput.length === 1) {
      oxygenResultArray = nextOxygenInput[0];
      break;
    }

    var counter = 0;
    for (let i = 0; i < nextOxygenInput.length; i++) {
      counter = counter + nextOxygenInput[i][j];
    }
    if (counter >= nextOxygenInput.length / 2) {
      oxygenResultArray[j] = 1;
    } else {
      oxygenResultArray[j] = 0;
    }

    nextOxygenInput = nextOxygenInput.filter(
      (v) => v[j] === oxygenResultArray[j]
    );
  }

  let co2ResultArray = [];
  let nextCo2Input = input;

  for (j = 0; j < numberOfColumns; j++) {
    if (nextCo2Input.length === 1) {
      co2ResultArray = nextCo2Input[0];
      break;
    }

    var counter = 0;
    for (let i = 0; i < nextCo2Input.length; i++) {
      counter = counter + nextCo2Input[i][j];
    }
    if (counter >= nextCo2Input.length / 2) {
      co2ResultArray[j] = 0;
    } else {
      co2ResultArray[j] = 1;
    }

    nextCo2Input = nextCo2Input.filter((v) => v[j] === co2ResultArray[j]);
  }

  let oxygenDecimal = parseInt(oxygenResultArray.join(""), 2);
  let co2Decimal = parseInt(co2ResultArray.join(""), 2);

  return oxygenDecimal * co2Decimal;
};
