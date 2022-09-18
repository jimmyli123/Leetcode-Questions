// 20. Valid Parentheses

// We use an object to hold the opening and closing brackets
var isValid = function(s) {
    let brackets = {
        '(':')',
        '[':']',
        '{':'}'
    }

// Storing the closing brackets.
    let heap = []

// Iterate through the string. 
    for (let char of s) {
        // If the character is an opening bracket, we push the respective closing bracket into our heap array.
        if (brackets[char]) {
            heap.push(brackets[char])

            // Otherwise, the character is a closing bracket. We compare it to the last element we pushed into our heap array. If it's not the same, then that means the closing bracket is incorrect.
        } else {
            if (char !== heap.pop()) {
                return false;
            }
        }
    }
    // There is still the possibility that there is still an opening bracket in the string. We test for the length in our heap array. If the heap array still has an element, it means the string didn't close.
    return heap.length === 0
    
    
};