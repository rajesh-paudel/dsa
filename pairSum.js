//to find the sum of pair in array equal to target sum

const arr = [2, 7, 11, 15];
const target = 26;

for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log(i, j);
      return;
    }
  }
}

// more optimsed for sorted array
let s = 0;
let e = arr.length - 1;
for (i = s; i < e; i++) {
  if (arr[s] + arr[e] == target) {
    console.log(s, e);
    return;
  } else if (arr[s] + arr[e] > target) {
    e = e - 1;
  } else {
    s = s + 1;
  }
}
