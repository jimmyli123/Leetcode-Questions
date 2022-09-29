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