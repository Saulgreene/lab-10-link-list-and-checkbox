const expect = require('expect');
const SLL = require('../singly-linked-list.js');

describe('testing SLL methods', () => {
  describe('append node', () => {
    it('should return 8 as the value of the head', () => {
      let head = new SLL(8);
      head.appendNode(new SLL(12));
      expect(head.value).toEqual(8);
    });
    it('should return the value of the fourth node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      expect(head.next.next.next.value).toEqual(21);
    });
    it('should return null for the next of the fourth node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      let lastNode = head.next.next.next.next;
      expect(lastNode).toEqual(null);
    });
  });
  describe('reverse node', () => {
    it('should reverse the list and return 3 as the head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(3));
      head = head.reverse();
      expect(head.next.next.next.value).toEqual(5);
    });
    it('should reverse the list and return 16 for next value of the second from head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head = head.reverse();
      expect(head.next.value).toEqual(16);
    });
    it('should reverse the list and return null for the next of 5', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      let lastNode = head.next.next.next.next;
      head = head.reverse();
      expect(lastNode).toEqual(null);
    });
  });
  describe('remove node', () => {
    it('should return null as the value for the next of head after removing all nodes besides the head', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.remove(head);
      expect(head.next).toEqual(null);
    });
    it('should expect 21 as the value of the third node after removing 16', () => {
      let head = new SLL(5);
      console.log(head);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head.remove(head);
      expect(head.next.next.value).toEqual(21);
    });
    it('should return null as the value for the next of the last node', () => {
      let head = new SLL(5);
      head.appendNode(new SLL(12));
      head.appendNode(new SLL(16));
      head.appendNode(new SLL(21));
      head.remove(head);
      expect(head.next.next.next).toEqual(null);
    });
  });
});
