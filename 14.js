var longestCommonPrefix = function(strs) {

    // We use the first element as prefix. It does not matter which element we use.
    let prefix = strs[0]

    // We compare the prefix to the rest of the words in the array. 
    for (let index=1; index<strs.length; index++) {

        // If the word does not contain prefix, we keep on iterating and removing the last character in prefix.
        while (strs[index].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0,prefix.length-1)
        }
    }
    return prefix
};