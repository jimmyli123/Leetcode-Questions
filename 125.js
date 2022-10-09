// 125. Valid Palindrome

var isPalindrome = function(s) {
    // ^ means opposite
    // Replace the characters that are not within the brackets [] with ""
    let x = s.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase().split("")
    return x.join("") === x.reverse().join("")
    
};