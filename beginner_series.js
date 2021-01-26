// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum( a,b )
{
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}