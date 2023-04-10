// 100. Same Tree
// If p and q are both null, return true.
// If p is null while q isn't or q is null while p isnt or values are not the same, return false
// 

var isSameTree = function(p, q) {
    if (p === null && q === null) { return true }
    if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val))  {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};