"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4 * a * c;
  console.log(d);
  if (d < 0) {
    return arr;
  } else if (d === 0) {
      let x = (-b / (2 * a));
      arr.push(x);
      return arr;
  } else if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d) ) / (2 * a);
      arr.push(x1);
      arr.push(x2);
      return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}