** start of script.js **

function findMissingNumbers(arr) {
  arr.sort((a, b) => a - b);
  const missing = [];
  const n = arr[arr.length - 1];
  for (let i = 1; i <= n ; i++) {
    if (!arr.includes(i)){
      missing.push(i);
    }
  }
  return missing; 
}

console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));



** end of script.js **

