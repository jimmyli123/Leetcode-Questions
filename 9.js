// 9. Palindrome Number

// Change number to String so we can split it into an array. Reverse that and join back into a String. 
// Compare that to the String representation.

var isPalindrome = function(x) {
    return x.toString().split("").reverse().join("") === x.toString()
 };