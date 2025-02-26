function climbingStaircase(n) {
  if (n < 2) return 1;

  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}
console.log(climbingStaircase(4));
