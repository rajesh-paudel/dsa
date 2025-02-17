//reversing an array with recursion

const arr = [1, 2, 3, 4, 5];

function rec(array, s, e) {
  if (s > e) {
    return;
  }
  let temp = array[s];
  array[s] = array[e];
  array[e] = temp;

  rec(array, s + 1, e - 1);
}
rec(arr, 0, arr.length - 1);
console.log(arr);
