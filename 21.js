// 21. Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) {
    let answerNode = new ListNode(0)
    let tempNode = answerNode
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            answerNode.next = list1;
            list1 = list1.next
        } else {
            answerNode.next = list2;
            list2 = list2.next;
        }
        answerNode = answerNode.next;
    }
    list1 ? answerNode.next = list1 : answerNode.next = list2
    return tempNode.next
    
};