//to find the sum of maximum subarray
const arr = [3, -4, 5, 4, -1, 7, -8];

let largest = 0;
for (i = 0; i < arr.length; i++) {
  for (j = i; j < arr.length; j++) {
    let sum = 0;
    for (k = i; k <= j; k++) {
      sum = sum + arr[k];
      if (sum > largest) {
        largest = sum;
      }
    }
  }
}
console.log(largest);

//using kadane's algorithm
let currSum = 0,
  maxSum = 0;
for (i = 0; i < arr.length; i++) {
  currSum = currSum + arr[i];
  if (currSum > maxSum) {
    maxSum = currSum;
  }
  if (currSum < 0) {
    currSum = 0;
  }
}
console.log(maxSum);
