'use strict';


class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }
// this is a BIG O of n
  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  // this is a BIG O of n
  remove(node){
    if(!(node instanceof SLL))
      return null;
    this.node = node;
    node.val = node.val;
    node.next = node.next.next;

    return;

  }
// this is a BIG O of 2n
  reverse() {
    let current = this;
    let previous = null;

    while(current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  }
}

module.exports = SLL;
