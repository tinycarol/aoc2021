function generateAgesArray(timers) {
  const days = new Array(9).fill(0);
  for (let timer of timers) {
    days[timer]++;
  }
  return days;
}

module.exports.part1and2 = (initialDays, days) => {
  let daysLeft = days;
  const fishByAge = generateAgesArray(initialDays);
  while (daysLeft > 0) {
    const reproducedFish = fishByAge.shift();
    fishByAge[8] = reproducedFish;
    fishByAge[6] += reproducedFish;
    daysLeft--;
  }
  return fishByAge.reduce((a, v) => a + v, 0);
};
