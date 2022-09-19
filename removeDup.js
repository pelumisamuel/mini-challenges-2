function removeDuplicates(obj) {
  //[[],[],[],[]]
  let eachKeyArray = [];
  let newArray = [];
  let testArray = [];

  //console.log(Object.keys(obj).length);
  let objKeys = Object.keys(obj);

  objKeys.forEach((key) => {
    // console.log(index);

    let eachRow = obj[key];

    eachRow.forEach((char) => {
      if (!eachKeyArray.includes(char)) {
        eachKeyArray.push(char);
        // console.log(char)
      }
    });

    newArray.push(eachKeyArray);
    eachKeyArray = [];
    //tracker++;
  });
  // eachKeyArray[2] = [1, 2, 3, 4];
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
  // console.log(newArray);

  newArray.forEach((char) => {
    if (!testArray.includes(char)) {
      testArray.push(char);
      // console.log(char)
    }
  });
  //     newArray = newArray.toString().split(",");
  //   console.log(newArray);
  count = {};
  newArray
    .toString()
    .split(",")
    .forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });
  // Object.entries(count).forEach((value, index, key) => {
  //   console.log(`${key}: ${value}`);
  // });
  // for (const [key, value] of Object.entries(count)) {
  //   console.log(`${key}: ${value}`);
  // }
  let dupTrack = [];
  console.log(testArray);

  //console.log(count);
  for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray[i].length; j++) {
      let k = 0;
      for (letter of dupTrack) {
        if (letter == testArray[i][j]) {
          ++k;
        }
      }

      for (const [key, value] of Object.entries(count)) {
        // let k = testArray[i].length - 1 === j ? (k = 0) : 0;

        if (value > 1) {
          //console.log(`key: ${key} value: ${value}`);
          // if (j === 0) k = 0;

          // if (value > 1 && k < value) {
          //console.log(`${key}: ${value}`);
          // while (k < value) {
          // console.log(testArray[i][j]);
          // console.log(i, j);
          // console.log("check K: " + k);
          key === "B" && console.log("this is the value: ", value, k);

          if (key === testArray[i][j] && k < value - 1) {
            dupTrack.push(testArray[i][j]);

            testArray[i].splice(j, 1);
            //console.log("key:", key);
            //console.log(testArray[0][3]);
            // console.log("k is " + k);
            //   console.log(key + " value is " + value);
          }
          // } else {
          //   //   k++;
          //   // }
          // }
          //   if (key === testArray[i][j] ) {
          //     console.log(tracker);
          //     console.log(testArray[i][j]);
          //     testArray[i].splice(j, 1);

          //     // console.log(trackValue);

          //     // // console.log(i, j + " logging");
          //     // tracker++;
          //     // console.log(tracker);
          //   }
        }
      }
    }
  }

  //   for (let i = 0; i < testArray.length; i++) {
  //     // const element = array[i].toString();
  //     for (let j = 0; j < testArray[i].length; j++) {
  //       // console.log(newArray[i][j]);
  //       //console.log(testArray[i][j]);
  //       console.log(testArray[i].length + "nibo");

  //       if (testArray[i][j] === testArray[i++][j]) {
  //         //console.log("duplicates here is " + testArray[i][j]);
  //         //console.log(i, j + " dup " + testArray[i][j]);
  //         //console.log(testArray.slice(testArray[i][j]));
  //         console.log(testArray[i].splice(j, 1));
  //         //console.log(testArray.indexOf(testArray[i++][j]));
  //       }
  //       //   if (j === testArray[i].length) {
  //       //     console.log("hmmmm" + j);
  //       //     if (testArray[i][j] === testArray[i][j]) {
  //       //       console.log("duplicates here is " + testArray[i][j]);
  //       //     }
  //       //   }
  //       //   newArray[i+1].forEach(char=>{
  //       //     if()
  //       //   })
  //     }
  //   }
  console.log(dupTrack);
  // console.log(testArray);
  // console.log(objKeys);
  const result = testArray.reduce(
    (obj, cur, index) => ({ ...obj, [objKeys[index]]: cur }),
    {}
  );
  console.log(result);
}

// removeDuplicates({
//   432: ["A", "A", "B", "D"],
//   53: ["L", "G", "B", "C"],
//   236: ["L", "A", "X", "G", "H", "X"],
//   11: ["P", "R", "S", "D"],
// }); /////
// removeDuplicates({
//   1: ["A", "B"],
//   2: ["A", "B"],
//   3: ["A", "B"],
// });
// removeDuplicates({
//   350: ["C", "A", "A"],
//   291: ["C", "C", "A", "A", "A", "C", "G"],
//   236: ["L", "A", "X", "G", "H", "X"],
//   91: ["P", "R", "S", "D"],
//   53: ["L", "G", "B", "C"],
//   12: ["A", "A", "B", "D"],
// });
removeDuplicates({
  1: ["A", "B", "D"],
  2: ["L", "G", "B", "C"],
  3: ["L", "A", "X", "G", "H"],
  4: ["C", "B", "G"],
  5: ["C", "B", "L"],
  6: ["C", "B", "L"],
});
// { "1": ["C"], "2": ["A", "B", "D"] }
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
