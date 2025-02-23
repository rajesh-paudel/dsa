function fibonacci(n) {
  if (n < 0) {
    return "no negative values";
  }
  let arr = [];

  for (i = 0; i < n; i++) {
    if (i == 0) {
      arr[i] = 0;
    } else if (i == 1) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
}
console.log(fibonacci(-2));
