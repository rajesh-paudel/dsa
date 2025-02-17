//stack implementation

let data = [7, 2, 3, 4];
let currSize = data.length;
let max = 5;

//push an element to stack
function push(val) {
  if (currSize >= max) {
    console.log("stack is full");
    return;
  }
  data[currSize] = val;
  currSize = currSize + 1;
}

push(10);
console.log(data);

//pop last element from stack
function pop() {
  if (currSize <= 0) {
    console.log("stack is empty");
    return;
  }
  data.length = data.length - 1;
  currSize = currSize - 1;
}

pop();
console.log(data);
