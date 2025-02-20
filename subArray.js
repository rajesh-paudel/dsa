//printing subarrays of an array

const arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++) {
  for (j = i; j < arr.length; j++) {
    for (k = i; k <= j; k++) {
      console.log(arr[k]);
    }
    console.log("");
  }
}
