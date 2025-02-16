//factorial using recursion

function fact(num) {
  if (num < 0) {
    return undefined;
  }
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * fact(num - 1);
}
console.log(fact(5));

//without recursion
function factorial(num) {
  let fact = 1;
  if (num < 0) {
    return undefined;
  }
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(0));
