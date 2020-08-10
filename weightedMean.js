function processData(input) {
    //Enter your code here
    var input_integer = input.split('\n')[1].split(' ');
    input_integer = input_integer.map(function (element) {
        return parseInt(element);
    });

    var input_weight = input.split('\n')[2].split(' ');
    input_weight = input_weight.map(function (element) {
        return parseInt(element);
    });

    if (input_integer.length == input_weight.length) {
        let sumNum = 0
        let sumDen = 0
        let weightedMean = 0
        for (let i = 0; i < input_integer.length; i++) {
            sumNum += input_integer[i] * input_weight[i]

            sumDen += input_weight[i]
        }

        weightedMean = (sumNum / sumDen).toFixed(1)
        console.log(weightedMean)

    } else {
        console.log("weight and input integer size doesn't match")
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