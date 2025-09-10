** start of script.js **

function arrayDiff(arr1, arr2) {
  const uniqueArr1 = arr1.filter((elem1) => {
    // IF this element of arr1 is found in arr2, we don't want this in the filtered array
    // THUS only include this elem in the uniqueArr1 when this elem is not found in arr2
    return !arr2.find((elem2) => elem1 === elem2);
  });

  const uniqueArr2 = arr2.filter((elem2) => {
    // Applied the above algorithm to find elem that exist in arr2 but not in arr1
    return !arr1.find((elem1) => elem2 === elem1);
  });
  // CONCATENATE two of these unique array
  // SORT to make it in alphabetical order
  const concatArr = [...uniqueArr1, ...uniqueArr2].sort();
  return concatArr;
}

arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])

** end of script.js **

