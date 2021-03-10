
public class Main {
    public static void main(String[] args) {

    }
}
// 876. Middle of the Linked List


// Definition for singly-linked list.
  public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    int count = 1;
    int secCounter = 0;
    public ListNode middleNode(ListNode head) {
        ListNode temp = head;
        while(temp.next != null) {
            count++;
            temp = temp.next;
        }
        int middle = (int)Math.floor(count/2);
        while (head.next != null) {
            if (secCounter == middle) {
                return head;
            }
            secCounter++;
            head = head.next;
        }
        return head;
    }
}