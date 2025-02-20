const arr = [-1, 0, 3, 4, 5, 9, 12];
const target = 33;

let st = 0;
let end = arr.length - 1;
for (i = st; i < end; i++) {
  mid = Math.floor((st + end) / 2);
  if (arr[mid] == target) {
    console.log(`index for ${target} is ${mid}`);
    return;
  } else if (arr[mid] < target) {
    st = mid + 1;
  } else if (arr[mid] > target) {
    end = mid - 1;
  }
}
if (st > end) {
  console.log("element not found");
}

//using recursion
function binarySearch(arr, target, st, end) {
  mid = Math.floor((st + end) / 2);
  if (st <= mid) {
    if (arr[mid] == target) {
      console.log(`index for ${target} is ${mid}`);
      return;
    } else if (arr[mid] < target) {
      st = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
    binarySearch(arr, target, st, end);
  } else {
    console.log("element not found");
  }
}

binarySearch(arr, target, st, end);
