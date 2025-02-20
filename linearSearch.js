//linear search in array

const data = [2, 43, 5, 34, 53, 6422, 34];

function search(val) {
  for (i = 0; i < data.length; i++) {
    if (data[i] == val) {
      return i;
    }
  }
  return "couldnot found the element";
}

console.log(search(22));
