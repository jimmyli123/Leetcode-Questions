// 35. Search Insert Position

// Using binary search. If target is not in the array, then return left position because that's where the target positon should be.

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    while (left <= right) {
        let midIndex = left + Math.floor((right-left)/2)
        let midVal = nums[midIndex]
        
        if (midVal === target) {
            return midIndex;
        } 
        else if ( target<midVal ) {
            right = midIndex - 1
        }
        else { left = midIndex + 1;}
        
    }
    return left;
};


console.log(searchInsert([1,3,5,6], 5), 'answer is 2')
console.log(searchInsert([1,3,5,6], 2), 'answer is 1')
console.log(searchInsert([1,3,5,6], 7), 'answer is 4')