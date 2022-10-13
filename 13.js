// 13. Roman to Integer

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