// 94. Binary Tree Inorder Traversal

// Traverse the left tree, return root value, traverse the right tree.
var inorderTraversal = function(root) {
    let answer = []
    function inorder(node) {
        if (node === null) {
            return
        }
        inorder(node.left)
        answer.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return answer;
    
};


// Advanced answer
var inorderTraversal = function(root) {
    let answer = []
    let tourist = root;
    
    while (tourist!== null) {
        let guide = tourist.left;
        if (tourist.left!==null) {
            while (guide.right!==null && guide.right !== tourist) {
                guide = guide.right;
            }
            if (guide.right === null) {
                guide.right = tourist;
                tourist = tourist.left
            } else {
                guide.right = null;
                answer.push(tourist.val)
                tourist = tourist.right
            }
        } else {
            answer.push(tourist.val);
            tourist = tourist.right;
        }
    }
    return answer;
    
};