** start of script.js **

function tribonacciSequence(startSequence, length) {
  // understand the problem
  // What is tribonacci Sequence: Starting at index 3, every element is equal to the sum of previous 3 elements
  // eg. seq[3] = seq[2] + seq[1] + seq[0]
  // this function returns this kind of sequence up until value length
  
  // there are 3 base case to handle
  // length 0: RETURN []
  // length 1: RETURN single element array that contain first element in startSequence
  // length 2: RETURN [firstElement, secondElement] of start sequence
  // length 3: RETURN [firstElement, secondElement, thirdElement] of start sequence

  // INITIALIZE sequence to store tribonacci sequence  
  let sequence = [];

  if (length === 0) 
    return [];
  else if (length === 1) 
    return startSequence.slice(0, 1);
  else if (length === 2) 
    return startSequence.slice(0, 2);
  else if (length === 3)
    return startSequence.slice(0, 3);
  else if (length > 3) {
    sequence = startSequence.slice(0, 3);
    // INITIALIZE i to be length of sequence
    // FOR i less than length
    //   INITIALIZE sequence[i] to sum of sequence[i-1], sequence[i-2], sequence[i-3]

    for (let i = sequence.length; i < length; i++) {
      sequence[i] = sequence[i-1] + sequence[i-2] + sequence[i-3];
      console.log(sequence.length);
    }
  }
  // RETURN sequence
  return sequence;
}



** end of script.js **

