// to find the largest element in array

const data = [23, 54, 32, 54, 34, 432, 431, 5, 4, 224];
function largest(arr) {
  let largestVal = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestVal) {
      largestVal = arr[i];
    }
  }
  return largestVal;
}
console.log(largest(data));
