function solution(keymap, targets) {
  var answer = [];

  var keysMap = new Map();

  for (var key of keymap) {
    for (var i = 0; i < key.length; i++) {
      if (keysMap.has(key[i]) && keysMap.get(key[i]) < i + 1) continue;

      keysMap.set(key[i], i + 1);
    }
  }

  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];
    var count = 0;

    for (var j = 0; j < target.length; j++) {
      if (!keysMap.has(target[j])) {
        count = -1;
        break;
      }

      count += keysMap.get(target[j]);
    }

    answer.push(count);
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AAKBB"]));
