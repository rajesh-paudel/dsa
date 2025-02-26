const a = ["a", "b", "c", "d"];
const b = ["e", "f", "g", "h"];

function cartesianProduct(a, b) {
  if ((a.length || b.length) < 1) {
    return "array should not be empty";
  }
  let arr = [];
  let ind = 0;
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      arr[ind] = [a[i], b[j]];
      ind++;
    }
  }
  return arr;
}

console.log(cartesianProduct(a, b));
