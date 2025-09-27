** start of script.js **

function isMirror(str1, str2) {
  function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }

  // str1's pointer
  let i = 0;
  // str2's pointer
  let j = str2.length - 1;
  while (i < str1.length && j >= 0) {
    while (!isLetter(str1[i])) {
      i++;
    }
    while (!isLetter(str2[j])) {
      j--;
    }
  
    if (str1[i] !== str2[j]) {
      console.log("");
      return false;
    }
    i++;
    j--;
  }
  return true;

}

console.log(isMirror("Hello World", "!dlroW !olleH"));

** end of script.js **

