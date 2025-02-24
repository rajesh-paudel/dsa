//check if given number is power of two or not

function powerofTwo(n) {
  if (n < 1) {
    return "only integers greater than one";
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return "it is not a power of 2";
    }
    n = n / 2;
  }
  return "it is power of two";
}

console.log(powerofTwo(64));
