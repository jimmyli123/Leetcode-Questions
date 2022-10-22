// 118. Pascal's Triangle

var generate = function(numRows) {
    let answerArray = []
    if (numRows < 1) { return answerArray }
    if (numRows ===1) { return [[1]]}
    answerArray.push([1])
    for (let i =1; i < numRows; i++) {
        let prevRow = answerArray[i-1]
        answerArray.push([1])
        for (let j=1; j<i; j++) {
            answerArray[i][j] = prevRow[j] + prevRow[j-1]
        } 
        answerArray[i].push(1)
    }
    return answerArray
};