function findLongestWordLength(sentence) {
  const arr = sentence.split(" ");
  let longestWordLength = 0;
  for (const word of arr) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}
