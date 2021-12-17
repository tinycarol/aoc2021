module.exports.part1 = (input) => {
  const nodes = [...new Set(input.flatMap((v) => v))].map((n) => new Node(n));

  for (let rule of input) {
    const n0 = nodes.find((n) => n.name === rule[0]);
    const n1 = nodes.find((n) => n.name === rule[1]);
    n0.addNeighbour(n1);
    n1.addNeighbour(n0);
  }

  const start = nodes.find((n) => n.name === "start");
  const end = nodes.find((n) => n.name === "end");

  const paths = [[start]];
  const fullPaths = [];

  while (paths.length > 0) {
    let currentPath = paths.shift();
    let nextNodes = currentPath[currentPath.length - 1].neighbours;

    for (let nextNode of nextNodes) {
      if (nextNode === end) {
        fullPaths.push([...currentPath, end].map((v) => v.name).join("=>"));
        continue;
      }

      if (!nextNode.isSmall || !currentPath.includes(nextNode)) {
        paths.push([...currentPath, nextNode]);
      }
    }
  }

  return fullPaths.length;
};

module.exports.part2 = (input) => {
  const nodes = [...new Set(input.flatMap((v) => v))].map((n) => new Node(n));

  for (let rule of input) {
    const n0 = nodes.find((n) => n.name === rule[0]);
    const n1 = nodes.find((n) => n.name === rule[1]);
    n0.addNeighbour(n1);
    n1.addNeighbour(n0);
  }

  const start = nodes.find((n) => n.name === "start");
  const end = nodes.find((n) => n.name === "end");

  const paths = [{ path: [start], repeated: false }];
  const fullPaths = [];

  while (paths.length > 0) {
    let { path: currentPath, repeated } = paths.shift();
    let nextNodes = currentPath[currentPath.length - 1].neighbours;

    for (let nextNode of nextNodes) {
      if (nextNode === end) {
        fullPaths.push([...currentPath, end].map((v) => v.name).join("=>"));
        continue;
      }

      if (nextNode !== start) {
        let currentNodeHasRepeated = repeated;

        if (nextNode.isSmall && currentPath.includes(nextNode)) {
          if (!repeated) {
            currentNodeHasRepeated = true;
          } else {
            continue;
          }
        }

        paths.push({
          path: [...currentPath, nextNode],
          repeated: currentNodeHasRepeated,
        });
      }
    }
  }

  return fullPaths.length;
};

class Node {
  constructor(name) {
    this.name = name;
    this.isSmall = name.toLowerCase() === name;
    this.neighbours = new Set();
  }

  addNeighbour(neighbour) {
    this.neighbours.add(neighbour);
  }
}
