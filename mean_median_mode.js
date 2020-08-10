function processData(input_arr) {

    var input = input_arr.split('\n')[1].split(' ');
    input = input.map(function (element) {
        return parseInt(element);
    });

    let mean, median, mode;

    let arraySum = 0;
    //MEAN
    for (i = 0; i < input.length; i++) {
        arraySum += input[i];
    }

    mean = arraySum / input.length;


    //MEDIAN
    let sortedArray = Array.prototype.slice.call(input);
    sortedArray.sort(compare);


    if (input.length % 2 == 0) {
        median = (sortedArray[input.length / 2] + sortedArray[input.length / 2 - 1]) / 2;
    } else {
        median = sortedArray[input.length / 2];
    }

    //MODE

    const map = new Map();
    let maxFreq = 0;

    for (const item of sortedArray) {
        let freq = map.has(item) ? map.get(item) : 0;
        freq++;

        if (freq > maxFreq) {
            maxFreq = freq;
            mode = item;
        }

        map.set(item, freq);
    }

    console.log(mean)
    console.log(median)
    console.log(mode)
}

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});