const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let exprArr = expr.split("");
  const result = [];

  while (exprArr.length !== 0) {
    let morseArr = [];
    let letter = exprArr.slice(0, 10);
    for (let index = 0; index < letter.length; index++) {
      if (exprArr[index] === "0") {
        continue;
      } else if (exprArr[index] === "1") {
        if (exprArr[index + 1] === "0") {
          index++;
          morseArr.push(".");
        } else {
          if (exprArr[index + 1] === "1") {
            index++;
            morseArr.push("-");
          }
        }
      } else {
        break;
      }
    }
    result.push(MORSE_TABLE[morseArr.join("")] || " ");
    exprArr.splice(0, 10);
  }
  console.log(result.join(""));
  return result.join("");
}

module.exports = {
  decode,
};
