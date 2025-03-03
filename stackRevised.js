class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  push(val) {
    this.items[this.size] = val;
    this.size++;
  }
  pop() {
    if (this.size == 0) return "stack is empty";
    this.items[this.size - 1] = null;
    this.items.length = this.items.length - 1;
    this.size--;
  }
  display() {
    console.log(this.items);
  }
  peek() {
    if (this.size == 0) return "stack is empty";
    console.log(this.items[this.size - 1]);
  }
}

const stk1 = new Stack();
console.log(stk1.isEmpty());
stk1.push(1);
stk1.push(45);
stk1.push(56);
stk1.push(983);
stk1.display();
console.log(stk1.isEmpty());
stk1.pop();
stk1.peek();
stk1.pop();
stk1.pop();
stk1.pop();
console.log(stk1.pop());
