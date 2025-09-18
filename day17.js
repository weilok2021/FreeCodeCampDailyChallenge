** start of script.js **

function generateSlug(str) {
  function isPunctuation(char) {
    // Matches common punctuation marks.
    // You can customize this regex to include or exclude specific characters.
    if (char === '#' || char === '%')
      return true;
    return /[.,;:!?"'()-/\[\]{}<>&*+=_`~$|\\^]/.test(char); 
  }
  str = str.trim().toLowerCase();
  let buffer = "";
  for (let i = 0; i < str.length; i++) {
    if (!isPunctuation(str[i])) {
      if (str[i] === ' ') {
        // concatenate %20 to replace original spaces
        buffer += "%20";
        while (str[i] === ' ') {
          i++; // skip all the consecutive spaces
        }
      }
      buffer += str[i];
    }
  }
  return buffer;
}

console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));


** end of script.js **

