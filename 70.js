// 70. Climbing Stairs

// Using code for fibonacci Sequence. 
var climbStairs = function(n) {
    // 0 steps: 1;
    // 1 : 1
    // 2 : 2
    // 3 : 3
    let memoi = [1,1,2,3]
    if (n < 2) {
        return 1;
    }
    for (let i = 4; i<= n; i++) {
        memoi[i]= memoi[i-1] + memoi[i-2]
    }
    return memoi[n]
};

// New if condition to check if memoir function has n already.
var climbStairs = function(n) {
    let memoir = [1, 1, 2, 3]
    if (memoir[n]) { return memoir[n]}
    for (let i = 4; i<=n; i++) {
        memoir[i] = memoir[i-1] + memoir[i-2]
    }
    return memoir[n]
};