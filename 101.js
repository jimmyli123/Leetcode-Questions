// 101. Symmetric Tree

var isSymmetric = function(root) {
    let sym = true;

    // Function that takes in the left and right nodes. 
    function traverse(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return;
        }
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            sym = false;
            return;
        }
        traverse(leftNode.left, rightNode.right) 
        traverse(leftNode.right, rightNode.left)
    }
    traverse(root.left, root.right)
    return sym;
};