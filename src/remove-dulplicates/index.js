function removeDuplicates(obj) {
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
      }
    });

    newArray.push(eachKeyArray);
    eachKeyArray = [];
  });

  newArray.forEach((char) => {
    if (!testArray.includes(char)) {
      testArray.push(char);
    }
  });

  let count = {};
  newArray
    .toString()
    .split(",")
    .forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });

  let dupTrack = [];

  //console.log(count);
  for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray[i].length; j++) {
      for (const [key, value] of Object.entries(count)) {
        // let k = testArray[i].length - 1 === j ? (k = 0) : 0;

        if (value > 1) {
          let k = 0;
          for (let letter of dupTrack) {
            if (letter === testArray[i][j]) {
              k++;
            }
          }

          if (key === testArray[i][j] && k < value - 1) {
            dupTrack.push(testArray[i][j]);
            testArray[i].splice(j, 1);
          }
        }
      }
    }
  }

  const result = testArray.reduce(
    (obj, cur, index) => ({ ...obj, [objKeys[index]]: cur }),
    {}
  );
  return result;
}

module.exports = removeDuplicates;
