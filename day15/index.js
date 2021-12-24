module.exports.part1 = (input) => {
  const start = "0,0";
  const end = input.end;
  return dijkstra(input, start, end);
};

module.exports.part2 = (input) => {
  const start = "0,0";
  const end = input.end;
  return dijkstra(input, start, end);
};

const dijkstra = (graph, source, target) => {
  const queue = new PriorityQueue();
  const minimumDistanceToNode = {};
  const previous = {};

  minimumDistanceToNode[source] = 0;

  for (let node in graph) {
    if (node !== source) {
      minimumDistanceToNode[node] = Number.MAX_SAFE_INTEGER;
      previous[node] = undefined;
    }
    queue.push(node, minimumDistanceToNode[node]);
  }

  minimumDistanceToNode[source] = 0;

  while (queue.size > 0) {
    const currentNode = queue.shift();

    if (currentNode === target) {
      break;
    }

    for (let neighbor in graph[currentNode]) {
      const alt =
        minimumDistanceToNode[currentNode] + graph[currentNode][neighbor];
      if (alt < minimumDistanceToNode[neighbor]) {
        queue.updatePriority(neighbor, minimumDistanceToNode[neighbor], alt);
        minimumDistanceToNode[neighbor] = alt;
        previous[neighbor] = currentNode;
      }
    }
  }

  const wayOut = [];
  let u = target;
  if (target in previous || u === source) {
    while (u) {
      wayOut.unshift(u);
      u = previous[u];
    }
  }

  return wayOut.reduce(
    ({ currentNode: previousNode, distance }, currentNode) => {
      if (currentNode === previousNode) {
        return { currentNode, distance };
      }
      return {
        currentNode,
        distance: distance + graph[previousNode][currentNode],
      };
    },
    { currentNode: "0,0", distance: 0 }
  ).distance;
};

class PriorityQueue {
  constructor() {
    this.priorities = {};
    this.lowestPriority = Number.MAX_SAFE_INTEGER;
    this.size = 0;
  }

  push(element, priority) {
    if (!this.priorities[priority]) {
      this.priorities[priority] = [];
    }
    this.priorities[priority].push(element);
    if (priority < this.lowestPriority) {
      this.lowestPriority = priority;
    }
    this.size++;
  }

  updateLowestPriority() {
    this.lowestPriority = Object.entries(this.priorities)
      .filter(([, elementsWithPriority]) => elementsWithPriority.length > 0)
      .map(([priority]) => parseInt(priority))
      .sort((priority1, priority2) => priority1 - priority2)[0];
  }

  shift() {
    const removed = this.priorities[this.lowestPriority].shift();
    if (this.priorities[this.lowestPriority].length === 0) {
      this.updateLowestPriority();
    }
    this.size--;
    return removed;
  }

  updatePriority(element, currentPriority, newPriority) {
    this.priorities[currentPriority].splice(
      this.priorities[currentPriority].indexOf(element),
      1
    );
    this.push(element, newPriority);
    this.updateLowestPriority();
  }
}
