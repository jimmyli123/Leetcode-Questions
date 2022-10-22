// 104. Maximum Depth of Binary Tree

var maxDepth = function(root) {
    if (!root) { return 0;}
    return 1 + Math.max(maxDepth(root.right),maxDepth(root.left))
};

// Easier to understand
function maxDepth(root) {
    // If the root is null, return 0
    if (!root) { 
        return 0;
    }
    // We find the depth of each child node. It will keep going until it hits a null child, which will return 1.
    // After we find the depth of the child, we pick the bigger amount of the two subtrees. 
    let leftDepth = maxDepth(root.left); 
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;

};