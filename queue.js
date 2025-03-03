class Queue {
  constructor() {
    this.items = [];

    this.rear = -1;
  }

  isEmpty() {
    return this.rear == -1;
  }
  enqueue(val) {
    this.rear++;
    this.items[this.rear] = val;
  }
  dequeue() {
    if (this.isEmpty()) {
      return "empty queue";
    }
    for (let i = 0; i < this.rear; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length--;
    this.rear--;
  }
  peek() {
    if (this.isEmpty()) {
      return "empty queue";
    }
    return this.items[0];
  }
  display() {
    console.log(this.items);
  }
}
const queue = new Queue();

queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(98);
queue.enqueue(56);

queue.dequeue();
queue.dequeue();
console.log(queue.peek());

queue.display();
