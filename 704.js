// 704. Binary Search

var search = function(nums, target) {
    let left = 0; 
    let right = nums.length-1
    while (left<=right) {
        let midIndex = left + Math.floor((right-left)/2)
        if (nums[midIndex] === target) {
            return midIndex;
        }
        else if (target < nums[midIndex]) {
            right = midIndex - 1
        } else { left = midIndex + 1}
    }
    return -1
};