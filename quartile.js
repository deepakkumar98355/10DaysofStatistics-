function processData() {
  //Enter your code here
  //   var input_integer = [3, 7, 8, 5, 12, 14, 21, 13, 18];
  //   var input_integer = [3, 7, 8, 5, 12, 14, 21, 15, 18, 14];
  var input_integer = [4, 17, 7, 14, 18, 12, 3, 16, 10, 4, 4, 12];
  let Q1, Q2, Q3;

  let sortedResult = Array.prototype.slice.call(input_integer);

  sortedResult.sort(compare);

  // check for even or odd
  if (sortedResult.length % 2 == 0) {
    //calculation for Q1
    Q1 = sortedResult[Math.floor(sortedResult.length / 2 / 2)];
    //calculation for Q2
    Q2 = (sortedResult[sortedResult.length / 2] + sortedResult[sortedResult.length / 2 - 1]) / 2;
    //calculation for Q3

    Q3 = sortedResult[Math.floor(sortedResult.length / 2 / 2) + sortedResult.length / 2];
  } else {
    //calculation for Q1
    Q1 = (sortedResult[Math.floor(sortedResult.length / 2 / 2)] + sortedResult[Math.floor(sortedResult.length / 2 / 2) - 1]) / 2;
    //calculation for Q2
    Q2 = sortedResult[Math.floor(sortedResult.length / 2)];
    //calculation for Q3
    Q3 =
      (sortedResult[Math.floor(sortedResult.length / 2) + Math.floor(sortedResult.length / 2) / 2] + sortedResult[Math.floor(sortedResult.length / 2) + Math.floor(sortedResult.length / 2) / 2 + 1]) /
      2;
  }

  console.log(Q1);
  console.log(Q2);
  console.log(Q3);
}

function compare(a, b) {
  return a - b;
}

processData();
