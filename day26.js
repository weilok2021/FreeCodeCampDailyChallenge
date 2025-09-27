** start of script.js **

function speeding(speeds, limit) {
  let numSpeeding = 0;
  let diffSum = 0;

  for (let speed of speeds) {
    let diff = speed - limit;
    if (diff > 0) {
      numSpeeding++;
      diffSum += diff;
    }
  }

  if (numSpeeding === 0) {
    return [0, 0];
  }
  return [numSpeeding, diffSum / numSpeeding];
}

console.log(speeding([50, 60, 55], 60));

** end of script.js **

