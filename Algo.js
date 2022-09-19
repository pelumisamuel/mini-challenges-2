const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};
//Object.freeze(MORSE_CODE);

function morse(text) {
  let message = "";

  if (typeof text !== "string") {
    console.log(typeof text);
  }
  //console.log(typeof text);
  if (typeof text !== "string") {
    console.log("Please provide a morse string");
    return;
  }

  text.split(" ").forEach((element) => {
    // console.log(element);
    if (MORSE_CODE[element] === undefined) {
      message += " ";
      //   console.log("space");
    } else {
      message += MORSE_CODE[element];
    }
    // console.log(MORSE_CODE[element]);
  });
  console.log(message.trim().split(/\s+/).join(" "));
}

// //morse("the  art  of  selling");
// // morse("-.. . -.-. .- -.. . ...-");

// // morse("...   ---   ...");
morse("");
// morse([
//   "[]     ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     ",
// ]);
// morse([
//   " ...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. .",
// ]);
// // `decodeMorse("-.. . -.-. .- -.. . ...-");``//should return "DECADEV"`;

//let chars = ["A", "B", "F", "E", "A", "F", "C", "B"];

// chars.forEach((c, index) => {
//   console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// });

// chars.filter((item, index) => {
//   if (chars.indexOf(item) !== index) {
//     console.log(item);
//   }
// });

// const uniqueChars = [];
// chars.forEach((char) => {
//   if (!uniqueChars.includes(char)) {
//     uniqueChars.push(char);
//     // console.log(char)
//   }
//   return;
// });
// console.log(uniqueChars);

// function removeDuplicates(obj) {
//   //[[],[],[],[]]
//   let eachKeyArray = [];
//   let newArray = [];
//   let testArray = [];

//   //console.log(Object.keys(obj).length);
//   let objKeys = Object.keys(obj);

//   objKeys.forEach((key) => {
//     // console.log(index);

//     let eachRow = obj[key];

//     eachRow.forEach((char) => {
//       if (!eachKeyArray.includes(char)) {
//         eachKeyArray.push(char);
//         // console.log(char)
//       }
//     });

//     newArray.push(eachKeyArray);
//     eachKeyArray = [];
//     //tracker++;
//   });
//eachKeyArray[2] = [1, 2, 3, 4];
//console.log(eachKeyArray);

//   for (let i = 0; i < newArray.length; i++) {
//     const arrayRow = newArray[i];
//     for (let j = 0; j < newArray[i].length; j++) {
//       // if(newArray[i][])
//       //   console.log(newArray[i][j]);
//       //   console.log(arrayRow);
//       //   if (arrayRow.includes(newArray[i][j])) {
//       //     console.log(`row ${arrayRow} has ${newArray[i][j]}`);
//       //   }
//     }
//   }
//   for (let i = newArray.length - 1; i >= 0; i--) {
//     //console.log(newArray[i]);
//     if (!testArray.includes(newArray[i])) {
//       testArray.push(newArray[i]);
//       // console.log(char)
//     }
//   }
//   newArray.forEach((char) => {
//     if (!testArray.includes(char)) {
//       testArray.push(char);
//       // console.log(char)
//     }
//   });
// newArray = newArray.toString().split(",");
//   console.log(newArray);
//   for (let i = 0; i < newArray.length; i++) {
//     // const element = array[i].toString();
//     for (let j = 0; j < newArray[i].length; j++) {
//       console.log(newArray[i][j]);
//       if (newArray[2].includes(newArray[i][j])) {
//         console.log("duplicates found" + newArray[i][j]);
//       }
//   newArray[i+1].forEach(char=>{
//     if()
//   })
//  }
//}
//console.log(testArray);
//}

// removeDuplicates({
//   432: ["A", "A", "B", "D"],
//   53: ["L", "G", "B", "C"],
//   236: ["L", "A", "X", "G", "H", "X"],
//   11: ["P", "R", "S", "D"],
// }); /////

//{ "1": ["C"], "2": ["A", "B", "D"] }
// `{

//     "432": ["A", "A", "B", "D"],
//     "53": ["L", "G", "B", "C"],
//     "236": ["L", "A", "X", "G", "H", "X"],
//     "11": ["P", "R", "S", "D"]
//   }

//   {
//     "11": ["P", "R", "S"],
//     "53": ["C"],
//     "236": ["L", "X", "G", "H"],
//     "432": ["A", "B", "D"]
//   }`;
