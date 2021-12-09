module.exports.part1 = (input) => {
  const numberOfRows = 5;
  const numberOfColumns = 5;

  const bingoCardsUnmarked = JSON.parse(JSON.stringify(input.bingoCards));

  function getResult(i, j) {
    return (
      bingoCardsUnmarked[j]
        .map((row) =>
          row.filter((v) => v !== undefined).reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0) * input.bingoNumbers[i]
    );
  }

  for (let i = 0; i < input.bingoNumbers.length; i++) {
    for (let j = 0; j < input.bingoCards.length; j++) {
      for (let k = 0; k < numberOfRows; k++) {
        for (let l = 0; l < numberOfColumns; l++) {
          if (input.bingoNumbers[i] === input.bingoCards[j][k][l]) {
            bingoCardsUnmarked[j][k][l] = undefined;

            if (
              bingoCardsUnmarked[j][k].filter((v) => v === undefined).length ===
              numberOfColumns
            ) {
              return getResult(i, j);
            }

            if (
              bingoCardsUnmarked[j]
                .map((row) => row[l])
                .filter((v) => v === undefined).length === numberOfRows
            ) {
              return getResult(i, j);
            }
          }
        }
      }
    }
  }

  return -1;
};

module.exports.part2 = (input) => {
  const numberOfRows = 5;
  const numberOfColumns = 5;

  const bingoCardsUnmarked = JSON.parse(JSON.stringify(input.bingoCards));
  const winnerCards = [];

  function getResult(i, j) {
    return (
      bingoCardsUnmarked[j]
        .map((row) =>
          row.filter((v) => v !== undefined).reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0) * input.bingoNumbers[i]
    );
  }

  for (let i = 0; i < input.bingoNumbers.length; i++) {
    for (let j = 0; j < input.bingoCards.length; j++) {
      if (winnerCards.includes(j)) {
        continue;
      }

      for (let k = 0; k < numberOfRows; k++) {
        for (let l = 0; l < numberOfColumns; l++) {
          if (input.bingoNumbers[i] === input.bingoCards[j][k][l]) {
            bingoCardsUnmarked[j][k][l] = undefined;

            if (
              bingoCardsUnmarked[j][k].filter((v) => v === undefined).length ===
              numberOfColumns
            ) {
              winnerCards.push(j);
              if (winnerCards.length === input.bingoCards.length) {
                return getResult(i, j);
              }
            } else if (
              bingoCardsUnmarked[j]
                .map((row) => row[l])
                .filter((v) => v === undefined).length === numberOfRows
            ) {
              winnerCards.push(j);
              if (winnerCards.length === input.bingoCards.length) {
                return getResult(i, j);
              }
            }
          }
        }
      }
    }
  }

  return -1;
};
