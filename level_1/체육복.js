function solution(n, lost, reserve) {
  var intersectionSet = new Set(lost.filter((item) => reserve.includes(item)));

  var lostArr = lost.filter((item) => !intersectionSet.has(item));
  var reserveArr = reserve
    .filter((item) => !intersectionSet.has(item))
    .sort((a, b) => a - b);

  var answer = n - lostArr.length;

  for (var i = 0; i < reserveArr.length; i++) {
    var prev = reserveArr[i] - 1;
    var next = reserveArr[i] + 1;

    var prevIndex = lostArr.indexOf(prev);
    if (prevIndex > -1) {
      lostArr.splice(prevIndex, 1);
      answer++;
      continue;
    }

    var nextIndex = lostArr.indexOf(next);
    if (nextIndex > -1) {
      lostArr.splice(nextIndex, 1);
      answer++;
    }
  }

  return answer;
}
