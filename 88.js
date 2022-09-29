// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {

    let index = m + n - 1
    let m1 = m-1
    let n1 = n-1
    while (n1 >= 0) {
        if (nums1[m1] > nums2[n1]) {
            nums1[index] = nums1[m1]
            m1--;
        } else {
            nums1[index] = nums2[n1]
            n1--;
        }
        index--;
    }
    
};