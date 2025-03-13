//bubble sort

let arr = [1, 34, 23, 45, 55, 67, 87, 97, 46, 64, 46, 76];

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
