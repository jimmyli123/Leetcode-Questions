// 1. Two Sum

var twoSum = function(nums, target) {
    let answer = []
    if (nums.length ===2) {
        return [0,1]
    }
    for (let i =0; i<nums.length; i++) {
        let secondNumber = target - nums[i]
        if (nums.indexOf(secondNumber) !== -1 && nums.indexOf(secondNumber) !== i) {
            answer.push(i)
            answer.push(nums.indexOf(secondNumber))
            return answer;
        }
    }
    return answer;
};

// My ingenius solution
var twoSum = function(nums, target) {
    for (let i =0; i<nums.length; i++) {
        let difference = target-nums[i]
        let indexOfDif = nums.indexOf(difference,i+1)
        if (indexOfDif != -1) {
            return [i, indexOfDif]
        }
    }
};

// Slight update
var twoSum = function(nums, target) {
    for (let i =0; i<nums.length; i++) {
        let difference = target - nums[i]
        if (nums.includes(difference, i+1)) {
            return [i, nums.indexOf(difference,i+1)]
        }
    }
};