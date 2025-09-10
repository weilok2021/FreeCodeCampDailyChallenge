** start of script.js **

function allUnique(str) {
  // FOR each character in string
    // COMPARE this character to every character in the string
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    // try to find if any character in character list is equal to current character, and has different index than current location
    const isNotUnique = chars.find((char) => char === chars[i] && chars.indexOf(char) !== i)
    if (isNotUnique) {
      return false;
    }
  }

  // for (let i = 0; i < str.length; i++) {
  //   // prevent accesing index exceeding the array length
  //   if (i+1 !== str.length) {
  //     let curr = str[i];
  //     let next = str[i+1];
  //     if (curr === next) {
  //       return false;
  //     }
  //   }

  // }
  return true;
}

console.log(allUnique("abcda"));

** end of script.js **

