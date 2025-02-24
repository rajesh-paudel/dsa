//check whether a number is a prime number or not
//big oh O(n)

function prime(n) {
  if (n <= 1) {
    return "it is not a prime number";
  }
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "it is not a prime number";
    }
  }

  return "it is a prime number";
}
console.log(prime(4));

//for better optimised code we can run loop upto square root of n
// this gives big Oh of O(sqrt(n))
function prime(n) {
  if (n <= 1) {
    return "it is not a prime number";
  }
  for (i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return "it is not a prime number";
    }
  }

  return "it is a prime number";
}
console.log(prime(4));
