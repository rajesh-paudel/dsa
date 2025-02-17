//reversing a string using stack

//stack implementation

let data = [];
let currSize = data.length;
const max = 10;

function push(val) {
  if (currSize >= max) {
    console.log("stack is full");
    return;
  }
  data[currSize] = val;
  currSize = currSize + 1;
}
function pop() {
  if (currSize <= 0) {
    console.log("stack is empty");
    return;
  }
  const lastItem = data[currSize - 1];
  currSize = currSize - 1;
  data.length = currSize;
  return lastItem;
}

function reverse(str) {
  let revStr = [];
  for (i = 0; i < str.length; i++) {
    push(str[i]);
  }
  for (i = 0; i < str.length; i++) {
    revStr[i] = pop();
  }
  return revStr.join("");
}

console.log(reverse("hello"));
