function isolateDuplicates(text) {
  let result = [];
  let duplicateNum = 0;
  if (typeof text !== "string") {
    throw Error("Please enter a valid string");
  } else if (typeof text === "undefined") {
    throw Error();
  }
  let groupedChars = text.match(/(.)\1*/gi);

  groupedChars.forEach((word, index) => {
    if (word.length > 2) {
      word += "]";
      let isolatedStr = word.split("");
      isolatedStr.splice(2, 0, "[");

      result.push(isolatedStr.join(""));
      duplicateNum++;
    } else {
      result.push(word);
    }
  });

  return [result.join(""), duplicateNum];
}

module.exports = isolateDuplicates;
