// 66. Plus One

// We iterate through the array from right to left
var plusOne = function(digits) {
    for (let i = digits.length-1; i>=0; i--) {
        // If the digit is not a 9, we add a 1 to this number and return the array.
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits
        }
        // If the digit is a 9, we change it to 0 and continue with the for loop.
        else {
            digits[i] = 0
        }
    }
    // If we go through the for loop and didn't hit the return, that means all the elements in the array are 9's or its a 0. 
    // Therefore we add 1 to the first element of the array.
    digits.unshift(1)
    return digits
};

