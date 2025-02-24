const array = [2, 3, 32, 243, 23, 12, 43, 632, 4312, 13];

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
insertionSort(array);
console.log(array);
