// 136. Single Number

var singleNumber = function(nums) {
    if (nums.length === 1) { return nums[0]}
    nums.sort()
    let answer = {}
    for (let i =0; i<nums.length; i++) {
        if (answer[nums[i]]) {
            answer[nums[i]]++
        }
        else {
            answer[nums[i]] = 1
        }
    }
    for (const item in answer) {
        if (answer[item] === 1) {
            return item
        }
    }
};