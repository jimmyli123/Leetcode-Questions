// 58. Length of Last Word

var lengthOfLastWord = function(s) {
    // Splitting the input string into words separated by one space
    let strArray = s.split(/ +/)
    for (let i = 0; i <strArray.length; i++) {
        if (strArray[i].length===0) {
            strArray.splice(i,1)
            i = i -1;
        }
    }
    let lastElement= strArray[strArray.length-1]
    return lastElement.length
};