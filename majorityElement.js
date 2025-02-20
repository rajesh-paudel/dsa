//given an array nums of size n return majority element(occurs more than n/2 times in array)

const nums = [2, 3, 3, 3, 2, 3];

for (i = 0; i < nums.length; i++) {
  let count = 0;
  for (j = 0; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
    }
    if (count > nums.length / 2) {
      console.log(nums[i]);
      return;
    }
  }
}
