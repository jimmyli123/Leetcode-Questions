// 13. Roman to Integer
// Test if input had 1 char
var romanToInt = function(s) {
    let roman = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    let sum = roman[s[0]]
    if (s.length === 1) { return sum; }

    for (let i = 1; i <s.length; i++) {
        if (roman[s[i]] > roman[s[i-1]]) {
            sum = sum + (roman[s[i]] - roman[s[i-1]] - roman[s[i-1]])
        }
        else {
            sum = sum + roman[s[i]]
        }
    }
    return sum
};

// Get rid of checking if input was only 1 char. Not needed.
var romanToInt = function(s) {
    let roman = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let sum = 0;
    for (let i=0; i<s.length; i++) {
        if (roman[s[i]] < roman[s[i+1]]) {
            sum += roman[s[i+1]] - roman[s[i]];
            i++;
        }
        else {
            sum += roman[s[i]];
        }
    }
    return sum;

};