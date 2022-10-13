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

// Another brute force method
var containsDuplicate = function(nums) {
    let answer = false;
    if (nums.length === 1) { return answer; }
    for (let i = nums.length-1; i>=0; i--) {
        if (nums.indexOf(nums[i]) !== -1 && nums.indexOf(nums[i]) !== i) {
            answer = true;
            return answer;
        }
    }
    return answer;
};