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

// Using an object to store each element in nums as a key and property is how many times it appears.
// Big O is O(n)
var containsDuplicate = function(nums) {
    let container = {}
    for (let i =0; i<nums.length; i++) {
        if (container[nums[i]]) {
          container[nums[i]] += 1
        }
        else {
            container[nums[i]] = 1
        }
    }
    console.log(`Container: ${container}`)
    for (const element in container) {
        if (container[element] >= 2) {
            return true;
        }
        
    }
    return false;
};