class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "invalid size";
    }
    let node = new Node(element);

    let ind = 0;
    let prev;
    let current = this.head;
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      while (ind < index) {
        ind++;
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "invalid index";
    }

    let ind = 0;
    let current = this.head;
    let prev = current;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (ind < index) {
        ind++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
    return current.element;
  }

  indexOf(element) {
    let ind = 0;
    let current = this.head;
    while (ind < this.size) {
      if (current.element == element) {
        return ind;
      }
      ind++;
      current = current.next;
    }
    return "not found";
  }
  display() {
    let str = "";
    let current = this.head;
    while (current) {
      str = str + current.element + " ";
      current = current.next;
    }
    console.log(str);
  }
  isEmpty() {
    return this.size == 0;
  }
}
const ll = new LinkedList();
ll.add(5);
ll.add(10);
ll.add(33);
ll.add(23);
ll.insertAt(99, 3);
ll.display();
console.log(ll.indexOf(9));
console.log(ll.isEmpty());
const ww = new LinkedList();
console.log(ww.isEmpty());
ll.removeFrom(2);
ll.removeFrom(2);
ll.display();
