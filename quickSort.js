const array = [2, 3, 32, 243, 23, 12, 43, 632, 4312, 13];

function quickSort(arr) {
  let pivot = arr[0];
  let p = pivot + 1;
  let q = arr.length - 1;

  while (p < q) {
    if (arr[p] < pivot) {
      p = p + 1;
    }
    if (arr[q] > pivot) {
      q = q - 2;
    }
    let temp = arr[p];
  }
}
quickSort(array);
console.log(array);
