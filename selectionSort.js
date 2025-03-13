const arr = [2, 12, 43, 34, 23, 55, 63, 36, 42];

const selectionSort = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[i];

    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
};
selectionSort(arr);
console.log(arr);
