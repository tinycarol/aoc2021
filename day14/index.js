module.exports.part1 = (input) => {
  const polymerizer = new Polymerizer(input.polymer, input.instructions);
  polymerizer.run(10);
  return polymerizer.getScore();
};

module.exports.part2 = (input) => {
  const polymerizer = new Polymerizer(input.polymer, input.instructions);
  polymerizer.run(40);
  return polymerizer.getScore();
};

class Polymerizer {
  constructor(polymer, instructions) {
    this.polymer = polymer;
    this.instructions = instructions;
    this.count = Object.keys(this.instructions).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});

    const pairs = this.polymer
      .split("")
      .map((v, i, arr) =>
        i < arr.length - 1 ? `${v}${arr[i + 1]}` : undefined
      )
      .filter((v) => !!v);
    for (let pair of pairs) {
      this.count[pair]++;
    }
  }

  run(iterations) {
    for (let i = 0; i < iterations; i++) {
      this.next();
    }
  }

  next() {
    const newCount = {};
    for (let pair in this.count) {
      const add = this.instructions[pair];
      const p1 = `${pair[0]}${add}`;
      const p2 = `${add}${pair[1]}`;
      newCount[p1] = (newCount[p1] || 0) + this.count[pair];
      newCount[p2] = (newCount[p2] || 0) + this.count[pair];
    }
    this.count = newCount;
  }

  getLetterCounts() {
    const count = {};
    for (let pair in this.count) {
      count[pair[0]] = (count[pair[0]] || 0) + this.count[pair];
    }
    count[this.polymer.at(-1)]++;
    return count;
  }

  getScore() {
    const count = this.getLetterCounts();
    const sorted = Object.entries(count).sort(([, v1], [, v2]) => v1 - v2);
    const lowest = sorted[0];
    const highest = sorted.at(-1);
    return highest[1] - lowest[1];
  }
}
