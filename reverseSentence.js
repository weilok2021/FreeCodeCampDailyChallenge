** start of script.js **

function reverseSentence(sentence) {
  const wordsArrWithSpaces = sentence.split(" ");
  // An array for storing reversed words
  const reversedWordsArr = [];
  for (let i = wordsArrWithSpaces.length - 1; i >= 0; i--) {
    if (wordsArrWithSpaces[i] !== '') {
      reversedWordsArr.push(wordsArrWithSpaces[i]);
    }
  }
  return reversedWordsArr.join(" ");
}



** end of script.js **

