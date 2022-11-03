// 69. Sqrt(x)

// O(n)
var mySqrt = function(x) {
    let lastVal = 0;
    for (let i =0; i <= x; i++) {
        if (i*i > x) {
            break;
        } else {
            lastVal = i;
        }
    }
    return lastVal;
};

// My brute force method

var mySqrt = function(x) {
    if (x <=1 ) { return x}
    for (let i =1; i<=x; i++) {
        if (i*i === x) { return i}
        if (i*i > x) { return i-1}
    }
};

// My favorite answer
var mySqrt = function(x) {
    let i = 0;
    let answer = 0;
    while (i*i <= x) {
        answer = i;
        i++;
    }
    return answer;
};

// Binary-Search O(Log(n))

var mySqrt = function(x) {
    if (x<= 1){
        return x;
    }
    let hi = x
    let lo = 1;
    
    while (hi-lo >1) {
        let mid = lo + Math.floor((hi-lo)/2)
        if (mid * mid === x) {
            return mid;
        } 
        else if (mid * mid < x){
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return lo;
};