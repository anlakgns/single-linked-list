class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const one = new Node(1);
one.next = new Node(2);
one.next.next = new Node(3);
one.next.next.next = new Node(4);
one.next.next.next.next = new Node(5);

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // case : empty list
    if (!this.head) return;

    // case : one node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // case : many nodes
    let current = this.head;
    let newTail = null;

    while (current) {
      if (current.next) {
        newTail = current;
      }
      current = current.next;
    }
    const deletedNode = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return deletedNode;
  }

  shift() {
    // case: empty list
    if (!this.head) return null;

    // case : one node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // case : many nodes
    const currentHead = this.head;
    const newHead = currentHead.next;
    this.head = newHead;
    this.length--;

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    // case : empty list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }

    // case : many nodes
    const currentHead = this.head;
    const newHead = newNode;
    this.head = newHead;
    newHead.next = currentHead;
    this.length++;
    return newHead;
  }

  get(index) {
    // check edge cases
    if (index < 0 || index >= this.length) {
      return null;
    }

    let target = this.head;
    for (let i = 1; i <= index; i++) {
      target = target.next;
    }
    return target;
  }

  set(index, val) {
    const target = this.get(index);
    if (target) {
      target.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    // edge cases
    if (index < 0 || index > this.length) {
      return false;
    }

    // insert end
    if (index === this.length) {
      this.push(val);
      return true;
    }

    // insert begining
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    // insert middle
    const newNode = new Node(val);
    const previous = this.get(index - 1);
    const current = previous.next;
    previous.next = newNode;
    newNode.next = current;
    this.length++;

    return true;
  }

  remove(index) {
    // edge cases
    if (index < 0 || index <= this.length) {
      return false;
    }

    // remove first node
    if (index === 0) {
      this.shift();
      return true;
    }

    // remove last node
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    // remove in middle
    const previous = this.get(index - 1);
    const after = previous.next.next;
    previous.next = after;
    this.length--;
    return true;
  }
  reverse() {
    let movingNode = this.head;
    this.head = this.tail;
    this.tail = movingNode;

    let nextNode;
    let previousNode = null;
    for (let i = 0; i < this.length; i++) {
      // temp var : for next iteration
      nextNode = movingNode.next;

      // main logic : reverse pointers
      movingNode.next = previousNode;

      // preparation for next iteration : update vars
      previousNode = movingNode;
      movingNode = nextNode;
    }
  }
}

const list = new SingleLinkedList();

list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');



