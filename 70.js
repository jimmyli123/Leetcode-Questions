// 70. Climbing Stairs

// Using code for fibonacci Sequence. 
var climbStairs = function(n) {
    let pattern = [1,1,2]
    for (index=3; index<=n; index++) {
        pattern[index] = pattern[index-1] + pattern[index-2]
    }
    return pattern[n]
};