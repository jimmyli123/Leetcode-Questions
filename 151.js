// 151. Reverse Words in a String

var reverseWords = function(s) {

    // Split the input string into an array - splitting it by one space
    let x = s.split(" ")
    // Iterating through the array and splicing elements that are empty strings
    for (let i=0; i<x.length; i++) {
        if (x[i] ==="" ) {
            x.splice(i,1)
            i--;
        }
    }
    // Reversing the array, joining it into a string seperated by a space and returning it.
    return x.reverse().join(" ")
};