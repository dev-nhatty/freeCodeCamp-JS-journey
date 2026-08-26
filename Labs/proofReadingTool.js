function isPalindrome(word) {
  let r = word.length - 1;
  let check = true;
  for (let i = 0; i < word.length; i++) {
    if (word.toLowerCase()[i] !== word.toLowerCase()[r]) {check = false}
    r--;
  }
  return check
}

function findPalindromeBreaks (words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      arr.push(i)
    }
  }
  return arr;
}


function findRepeatedPhrases(words, phraseLength) {
  const result = [];

  if (phraseLength >= words.length) {
    return result;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = "";

    for (let j = i; j < i + phraseLength; j++) {
      phrase += words[j];

      if (j < i + phraseLength - 1) {
        phrase += " ";
      }
    }

    let isRepeated = false;

    for (let k = 0; k <= words.length - phraseLength; k++) {
      if (i === k) {
        continue;
      }

      let comparison = "";

      for (let m = k; m < k + phraseLength; m++) {
        comparison += words[m];

        if (m < k + phraseLength - 1) {
          comparison += " ";
        }
      }

      if (phrase === comparison) {
        isRepeated = true;
        break;
      }
    }

    if (isRepeated) {
      result.push(i);
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  const results = [];

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];

    const analysis = {
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text)
    };

    results.push(analysis);
  }

  return results;
}