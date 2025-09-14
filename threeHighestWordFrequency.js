** start of script.js **

function getWords(paragraph) {
  function removePunctuation(text) {
    return text.replace(/[^a-zA-Z0-9\s]/g, ''); 
  }
  
  paragraph = removePunctuation(paragraph);
  paragraph = paragraph.toLowerCase().split(" ");
  // to store all the word: wordCount
  const wordsCount = {};
  for (let i = 0; i < paragraph.length; i++) {
    let word = paragraph[i];
    if (!wordsCount[word]) {
      wordsCount[word] = 0
    }
    wordsCount[word] += 1;
  }

  const threeMostOccurence = [];
  // SEARCH unique max in the loops for three times
  // we use threeMostOccurence array to keep trace unqie max word.
  // In our context, unique max meaning that:
    // iteration 1: unique max is first highest
    // iteration 2: unique max is second hightst
    // iteration 3: unique max is third highest

  for (let i = 0; i < 3; i++) {
    let maxCount = -Infinity;
    let maxWord;
    for (let word in wordsCount) {
      const isUniqueMax = !threeMostOccurence.find((maxWord) => maxWord === word);
      if (wordsCount[word] > maxCount && isUniqueMax) {
        maxCount = wordsCount[word];
        maxWord = word;
      }
    }
    // ADD maxCount in each of 3 iterations to threeMostOccurence
    threeMostOccurence.push(maxWord);
  }
  return threeMostOccurence;
  return paragraph.split(" ");
}

console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"))

** end of script.js **

