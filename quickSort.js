const array = [2, 3, 32, 243, 23, 12, 43, 632, 4312, 13];

function quickSort(arr, start, end) {
  if (end <= start) return;
  let pivotPos = partition(arr, start, end);
  quickSort(arr, start, pivotPos - 1);
  quickSort(arr, pivotPos + 1, end);
}
function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (j = start; j <= end; j++) {
    if (arr[j] <= pivot) {
      i = i + 1;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return i;
}

quickSort(array, 0, array.length - 1);
console.log(array);
