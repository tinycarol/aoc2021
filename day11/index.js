module.exports.part1 = (input) => {
  let count = 0;
  const onFlash = () => {
    count = count + 1;
  };
  const octopi = new Octopi(input, onFlash);
  octopi.addNeighbours();
  for (let i = 0; i < 100; i++) {
    octopi.epoch();
  }
  return count;
};

module.exports.part2 = (input) => {
  let count = 0;
  const onFlash = () => {
    count = count + 1;
  };
  const octopi = new Octopi(input, onFlash);
  const octopiCount = input.reduce((acc, row) => acc + row.length, 0);
  octopi.addNeighbours();
  let sync = false;
  let days = 0;
  while (!sync) {
    const initial = count;
    octopi.epoch();
    if (count - initial === octopiCount) {
      sync = true;
    }
    days++;
  }
  return days;
};

class Octopi {
  constructor(levels, onFlash) {
    this.octopi = levels.map((row) => row.map((v) => new Octopus(v, onFlash)));
  }

  addNeighbours() {
    for (let i = 0; i < this.octopi.length; i++) {
      for (let j = 0; j < this.octopi[0].length; j++) {
        const octopus = this.octopi[i][j];
        octopus.addNeighbours(
          this.octopi[i - 1]?.[j], // top
          this.octopi[i - 1]?.[j - 1], // top left
          this.octopi[i - 1]?.[j + 1], // top right
          this.octopi[i]?.[j - 1], // left
          this.octopi[i]?.[j + 1], // right
          this.octopi[i + 1]?.[j], // bottom
          this.octopi[i + 1]?.[j - 1], // bottom left
          this.octopi[i + 1]?.[j + 1] // bottom right
        );
      }
    }
  }

  epoch() {
    for (let i = 0; i < this.octopi.length; i++) {
      for (let j = 0; j < this.octopi[0].length; j++) {
        this.octopi[i][j].increase();
      }
    }
    for (let i = 0; i < this.octopi.length; i++) {
      for (let j = 0; j < this.octopi[0].length; j++) {
        this.octopi[i][j].reset();
      }
    }
  }

  draw() {
    const drawing = this.octopi
      .map((row) => row.map((o) => o.level).join(""))
      .join("\n");
    console.log("epoch");
    console.log(drawing);
  }
}

class Octopus {
  constructor(initialLevel, onFlash) {
    this.level = initialLevel;
    this.flashed = false;
    this.neigbours = [];
    this.onFlash = onFlash;
  }

  addNeighbours(...octopi) {
    for (let octopus of octopi) {
      octopus && this.neigbours.push(octopus);
    }
  }

  increase() {
    this.level++;
    if (this.level === 10) {
      this.flash();
    }
  }

  flash() {
    this.flashed = true;
    this.onFlash();
    for (let octopus of this.neigbours) {
      octopus.increase();
    }
  }

  reset() {
    if (this.flashed) {
      this.level = 0;
      this.flashed = false;
    }
  }
}
