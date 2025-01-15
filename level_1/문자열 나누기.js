function solution(s) {
  var answer = 0;
  var mainAlphabet = "";
  var sameAlphabetCount = 0;
  var differentAlphabetCount = 0;
  for (var i = 0; i < s.length; i++) {
    if (!mainAlphabet) {
      mainAlphabet = s[i];
    }
    console.log(mainAlphabet, s[i]);

    if (mainAlphabet === s[i]) {
      sameAlphabetCount++;
    } else {
      differentAlphabetCount++;
    }

    if (sameAlphabetCount === differentAlphabetCount || !s[i + 1]) {
      answer++;
      mainAlphabet = "";
      sameAlphabetCount = 0;
      differentAlphabetCount = 0;
    }
  }

  return answer;
}

console.log(solution("aaabbaccccabba"));
