** start of script.js **

function tooMuchScreenTime(hours) {
  let averageOfSevenDays;
  let totalHours = 0;

  for (let i = 0; i < hours.length; i++) {
    totalHours += hours[i];
    if (hours[i] >= 10)
      return true;

    if (hours[i+1] && hours[i+2]) {
      let sumOfThreeDays = hours[i] + hours[i+1] + hours[i+2];
      let averageOfThreeDays = sumOfThreeDays / 3;
      if (averageOfThreeDays >= 8) {
        return true;
      }
    }
  }

  averageOfSevenDays = totalHours / hours.length;

  if (averageOfSevenDays >= 6) {
    return true;

  }

  return false;
}



** end of script.js **

