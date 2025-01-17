function solution(participant, completion) {
  var nameMap = new Map();

  participant.forEach((v) => {
    if (nameMap.has(v)) {
      nameMap.set(v, nameMap.get(v) + 1);
    } else {
      nameMap.set(v, 1);
    }
  });

  completion.forEach((v) => {
    if (nameMap.has(v)) {
      nameMap.set(v, nameMap.get(v) + 1);
    } else {
      nameMap.set(v, 1);
    }
  });

  for (let [k, v] of nameMap) {
    if (v % 2 !== 0) return k;
  }
}
