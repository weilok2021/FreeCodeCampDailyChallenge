** start of script.js **

function secondLargest(arr) {
  let firstLargest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      firstLargest = arr[i]; 
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < firstLargest && arr[j] > secondLargest) {
      secondLargest = arr[j];
    }
  }

  return secondLargest;
}

console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]));

** end of script.js **

