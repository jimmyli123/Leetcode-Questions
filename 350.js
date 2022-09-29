// 350. Intersection of Two Arrays II


var intersect = function(nums1, nums2) {
let answer = []
// Iterate through first array. If the current value has an index in num2, then it means the number is in nums2. 
// Add that number to our answer array and remove the value from both nums1 and nums2.
for (let i = 0; i<nums1.length; i++) {
    let currentVal = nums1[i]
    let x = nums2.indexOf(currentVal)
    if (x !== -1) {
        answer.push(currentVal)
        nums1.splice(i,1)
        // We have to decrement i because we spliced 1 element from the array. 
        i--;
        nums2.splice(x,1)
    }
}
return answer;
};