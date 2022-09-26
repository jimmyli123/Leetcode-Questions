// 217. Contains Duplicate

// Brute force method
var containsDuplicate = function(nums) {
    let sortedArray = nums.sort()
    for (let i =1; i<sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i-1]) {
            return true;
        }
    }
    return false;
};