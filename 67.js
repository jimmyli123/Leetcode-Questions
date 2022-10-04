// 67. Add Binary

var addBinary = function(a, b) {
    
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2)
    
 };

 // Bruteforce method
// Start at rightmost index of each input. If it's "1", add currentVal
// currentVal is the value of the current binary index. 
// Stored the sum of current value in a BigInt data type.
 var addBinary = function(a, b) {
    let aLength = a.length-1
    let bLength = b.length-1
    let aSum = BigInt(0);
    let bSum = BigInt(0);
    let currentVal = 1;
    for (let i = aLength; i>=0; i--) {
        if (a[i] === "1") {
            aSum+= BigInt(currentVal)
        }
        currentVal = currentVal * 2;
    }
    currentVal = 1;
    for (let i = bLength; i>=0; i--) {
        if (b[i] === "1") {
            bSum+= BigInt(currentVal)
        }
        currentVal = currentVal * 2;
    }
    return BigInt(aSum + bSum).toString(2)
};