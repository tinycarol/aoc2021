module.exports.part1 = (input) => {
  const bingo = new Bingo(input);
  return bingo.getWinnerScore();
};

module.exports.part2 = (input) => {
  const bingo = new Bingo(input);
  return bingo.getLastWinnerScore();
};

class Bingo {
  constructor(data) {
    this.numbers = data.numbers;
    this.cards = [];

    for (let card of data.cards) {
      this.cards.push(new Card(card));
    }
  }

  hasNumber() {
    return this.numbers.length > 0;
  }

  getWinnerScore() {
    let finalScore = -1;

    numbersLoop: for (let number of this.numbers) {
      for (let card of this.cards) {
        if (card.call(number)) {
          finalScore = number * card.calculateScore();

          if (finalScore !== -1) {
            break numbersLoop;
          }
        }
      }
    }

    return finalScore;
  }

  getLastWinnerScore() {
    const markedCards = new Array(this.cards.length).fill(false);

    for (let number of this.numbers) {
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].call(number)) {
          markedCards[i] = true;
          
          if (markedCards.every((v) => v)) {
            return number * this.cards[i].calculateScore();
          }
        }
      }
    }
    return -1;
  }
}

class Card {
  constructor(data) {
    this.data = data;
    this.rows = this.data.map((v) => new RowOrCol(v));
    this.cols = [];
    for (let i = 0; i < data.length; i++) {
      this.cols.push(new RowOrCol(data.map((row) => row[i])));
    }
  }

  call(number) {
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].call(number) || this.cols[i].call(number)) {
        return true;
      }
    }
    return false;
  }

  calculateScore() {
    return this.rows.reduce((acc, row) => acc + row.calculateScore(), 0);
  }
}

class RowOrCol {
  constructor(numbers) {
    this.numbers = numbers;
    this.called = new Array(numbers.length).fill(false);
  }

  call(number) {
    const foundIndex = this.numbers.indexOf(number);

    if (foundIndex >= 0) {
      this.called[foundIndex] = true;

      if (this.isFull()) {
        return true;
      }
    }

    return false;
  }

  isFull() {
    return this.called.every((v) => v);
  }

  calculateScore() {
    return this.numbers
      .filter((_, i) => !this.called[i])
      .reduce((acc, num) => acc + num, 0);
  }
}
