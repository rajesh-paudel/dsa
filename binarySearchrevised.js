const array = [2, 4, 8, 10, 24, 34];
function binarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (target > arr[mid]) {
      s = mid + 1;
    }
    if (target < arr[mid]) {
      e = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch(array, 5));
