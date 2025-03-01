const array = [2, 3, 32, 243, 23, 12, 43, 632, 4312, 13];

function mergeSort(arr) {
  if (arr.length < 2) return;
  midIndex = Math.floor(arr.length / 2);
  let leftHalf = [];
  let rightHalf = [];

  for (i = 0; i < midIndex; i++) {
    leftHalf[i] = arr[i];
  }
  for (i = midIndex; i < arr.length; i++) {
    rightHalf[i - midIndex] = arr[i];
  }
  mergeSort(leftHalf);
  mergeSort(rightHalf);

  merge(arr, leftHalf, rightHalf);
}
function merge(arr, left, right) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
mergeSort(array);
console.log(array);
