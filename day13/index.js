module.exports.part1 = (input) => {
  const { dots, instructions } = input;
  const map = new Map(dots);
  map.fold(instructions[0].axis, instructions[0].index);
  //map.drawDots();
  return map.getUniqueDots().length;
};

module.exports.part2 = (input) => {
  const { dots, instructions } = input;
  const map = new Map(dots);
  for (let instruction of instructions) {
    map.fold(instruction.axis, instruction.index);
  }
  return map.drawDots();
};

class Map {
  constructor(dots) {
    this.dots = dots;
  }

  getDots() {
    return this.dots;
  }

  drawDots() {
    const maxX = this.dots.sort((d1, d2) => d2[0] - d1[0])[0][0];
    const maxY = this.dots.sort((d1, d2) => d2[1] - d1[1])[0][1];
    const map = new Array(maxY + 1);
    for (let i = 0; i < maxY + 1; i++) {
      map[i] = new Array(maxX + 1).fill(".");
    }
    for (let [x, y] of this.dots) {
      map[y][x] = "#";
    }
    return map.map((v) => v.join(" ")).join("\n");
  }

  getUniqueDots() {
    return Object.keys(
      this.dots.reduce((acc, [x, y]) => {
        acc[`${x},${y}`] = true;
        return acc;
      }, {})
    );
  }

  fold(axis, index) {
    switch (axis) {
      case "x":
        this.dots = this.dots.map(([x, y]) => [
          x > index ? 2 * index - x : x,
          y,
        ]);
        break;
      case "y":
        this.dots = this.dots.map(([x, y]) => [
          x,
          y > index ? 2 * index - y : y,
        ]);
        break;
    }
  }
}
