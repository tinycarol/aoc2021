class Map {
  constructor(max, skipDiagonals) {
    this.skipDiagonals = skipDiagonals;
    this.map = new Array(max + 1)
      .fill(new Array(max + 1).fill(0))
      .map((v) => [...v]);
    this.intersections = new Set();
  }

  addSegment([[x1, y1], [x2, y2]]) {
    const changingCoord = x1 === x2 ? "y" : y1 === y2 ? "x" : "both";

    if (
      !this.skipDiagonals ||
      (this.skipDiagonals && changingCoord !== "both")
    ) {
      const segmentSize = changingCoord === "y" ? y2 - y1 : x2 - x1;
      const xSign = x2 - x1 < 0 ? -1 : 1;
      const ySign = y2 - y1 < 0 ? -1 : 1;
      for (let v = 0; v < Math.abs(segmentSize) + 1; v++) {
        const x =
          changingCoord === "both" || changingCoord === "x"
            ? x1 + xSign * v
            : x1;
        const y =
          changingCoord === "both" || changingCoord === "y"
            ? y1 + ySign * v
            : y1;
        this.map[x][y] += 1;
        if (this.map[x][y] > 1) {
          this.intersections.add(`${x},${y}`);
        }
      }
    }
  }

  log() {
    console.log(this.map.map((v) => v.join(",")).join("\n"));
  }

  calculateIntersections() {
    return this.intersections.size;
  }
}

module.exports.part1 = ([segments, max]) => {
  const map = new Map(max, true);

  for (let segment of segments) {
    map.addSegment(segment);
  }

  return map.calculateIntersections();
};

module.exports.part2 = ([segments, max]) => {
  const map = new Map(max, false);

  for (let segment of segments) {
    map.addSegment(segment);
  }

  return map.calculateIntersections();
};
