// 83. Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
    let tempNode = head
    while (head && head.next) {
        let nextNode = head.next
        if (head.val === nextNode.val ) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return tempNode
};