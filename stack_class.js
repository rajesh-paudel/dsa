//implementing stack using class

class Stack {
  data = [];
  currSize;
  max;
  constructor(size) {
    this.currSize = this.data.length;
    this.max = size;
  }
  push(val) {
    if (this.currSize >= this.max) {
      console.log("stack is full");
      return;
    }
    this.data[this.currSize] = val;
    this.currSize++;
  }
  pop() {
    if (this.currSize <= 0) {
      console.log("stack is empty");
      return;
    }
    this.currSize = this.currSize - 1;
    this.data.length = this.currSize;
  }
  display() {
    console.log(this.data);
  }
}

const arr = new Stack(2);
arr.push(5);
arr.push(3);
arr.push(2);
arr.pop();
arr.display();
