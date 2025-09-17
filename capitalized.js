** start of script.js **

function capitalize(paragraph) {

  function isLetter(char) {
    return typeof char === 'string' && char.length === 1 && /[a-zA-Z\p{L}]/u.test(char);
  }

  let buffer = "";
  let shouldCapitalizeNextLetter = true;
  for (let i = 0; i < paragraph.length; i++)
  {
    let letter = paragraph[i];
    if (shouldCapitalizeNextLetter && isLetter(letter)) {
      letter = letter.toUpperCase();
      shouldCapitalizeNextLetter = false;
    }


    if (letter === '.' || letter === '!' || letter === '?') {
      shouldCapitalizeNextLetter = true;
    }
    buffer += letter;
  
  }
  return buffer;
}

capitalize("hello world. how are you?")


** end of script.js **

