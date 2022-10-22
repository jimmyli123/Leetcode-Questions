// 119. Pascal's Triangle II

var getRow = function(rowIndex) {
    if (rowIndex === 0) { return [1]}
    if (rowIndex === 1) { return [1,1]}
    
    let storage = [[1] ,[1,1]]
    for (let i = 2; i <= rowIndex; i++) {
        
        let prevRow = storage[i-1]
        let currentRow = [1]
        for (let j = 1; j<i; j++) {
            currentRow[j] = prevRow[j] + prevRow[j-1]
        }
        currentRow.push(1)
        storage.push(currentRow)
    }
    return storage[rowIndex]
};