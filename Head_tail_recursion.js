// if recursive function call is first statement of a function then it is called head recursion and if its last then tail recursion
function test(n) {
  if (n > 0) {
    test(n - 1); //head recursion
  }
  console.log(n);
}
test(5);

function test2(n) {
  console.log(n);
  if (n > 0) {
    test2(n - 1); //tail recursion
  }
}

test2(3);
