function processData() {
    let input_data = [10, 40, 30, 50, 20]

    let mean = calculateMean(input_data)

    let numberMeanDiffSquareSum = 0

    for (let number of input_data) {
        let numberMeanDiff = 0
        let numberMeanDiffSquare = 0

        numberMeanDiff = number - mean
        numberMeanDiffSquare = numberMeanDiff * numberMeanDiff

        numberMeanDiffSquareSum += numberMeanDiffSquare

    }

    let standardDeviation = 0

    standardDeviation = (Math.sqrt(numberMeanDiffSquareSum / input_data.length)).toFixed(1)

    return Number(standardDeviation)

}

function calculateMean(data) {
    let mean
    let sum = 0

    for (let index = 0; index < data.length; index++) {
        sum += data[index]

    }

    mean = sum / (data.length)

    return mean
}



let data = processData();
console.log(data)