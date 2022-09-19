function isolateDuplicates(text) {
  //   let result = [];
  //   duplicateMem = [];
  //   let input = text.split("");
  //   let uniqueChars = [];

  //   //   input.filter((char, index) => {
  //   //     if (input.indexOf(char) !== index) {
  //   //       console.log(char);
  //   //     }
  //   //   });

  //   input.forEach((char, index) => {
  //     let counter = 0;
  //     let currentChar = "";
  //     //console.log(index);

  //     if (char === input[index + 1]) {
  //       //currentChar = char
  //       duplicateMem.push(char);
  //     }
  //   });
  //   //   for (let i = input.length; i >= 0; i--) {
  //   //     const char = input[i];
  //   //     if (char === input[i - 1]) {
  //   //       duplicateMem.push(char);
  //   //     }
  //   //   }
  //   console.log(duplicateMem.join(""));
  //   //   console.log(uniqueChars);
  let result = [];
  let duplicateNum = 0;
  //text.toLowerCase();
  let groupedChars = text.match(/([A-Za-z])\1*/gi);
  console.log(groupedChars);
  if (typeof text !== "string") "please enter a valid string";
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
  //   str = "aaaaaa";
  //   let isolatedStr = str.split("");
  //   //   str.split("").forEach((char, index) => {
  //   //     if (index == 2) {
  //   //       console.log(isolatedStr.push("]"));
  //   //     }
  //   //   });

  //   if (str.length > 2) {
  //     isolatedStr.splice(2, 0, "[");
  //   }
  //   console.log(isolatedStr.join(""));
  console.log([result.join(""), duplicateNum]);
}

isolateDuplicates("aaaabbcdeffFFfFfg");

// For example, the input `"aaaabbcdefffffffg"` should return `["aa[aa]bbcdeff[fffff]g", 2]`

//let chars = ["A", "B", "F", "E", "A", "F", "C", "B"];
// const uniqueChars = []
// chars.forEach((char) => {
//   if (!uniqueChars.includes(char)) {
//     uniqueChars.push(char)
//     // console.log(char)
//   }
//   return
// })

// console.log(uniqueChars)

// chars.filter((char, index) => {
//   if (chars.indexOf(char) !== index) {
//     console.log(char)
//   }
// })
// chars.forEach((c, index) => {
//   console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// });

// console.log(chars.indexOf('B'))
//chars.filter((char, index) => {})

//console.log(dupChars)

// chars.filter((item, index) => {
//   if (chars.indexOf(item) !== index) {
//     console.log(item)
//   }
// })
