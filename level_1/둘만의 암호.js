function solution(s, skip, index) {
  var alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((v) => !skip.includes(v));

  return s
    .split("")
    .map(
      (c) => alphabetArr[(alphabetArr.indexOf(c) + index) % alphabetArr.length]
    )
    .join("");
}
