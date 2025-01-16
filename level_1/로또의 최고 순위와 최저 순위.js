function solution(lottos, win_nums) {
  var correctCount = 0;
  var filterLottos = lottos.filter((v) => v !== 0);

  filterLottos.forEach((v) => {
    if (win_nums.includes(v)) correctCount++;
  });

  var maxRank = 7 - (6 - filterLottos.length + correctCount);

  return [
    maxRank > 6 ? 6 : maxRank,
    7 - correctCount > 6 ? 6 : 7 - correctCount,
  ];
}
