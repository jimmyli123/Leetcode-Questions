// 53. Maximum Subarray

var maxSubArray = function(nums) {
    let solution = nums[0]; 
    let currentBigger = nums[0]; 
    for (let i =1; i < nums.length; i++) {
        currentBigger = Math.max(nums[i], currentBigger + nums[i])
        solution = Math.max(solution, currentBigger)
    }
    return solution;
};