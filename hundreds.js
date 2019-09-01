function calculateRectangleArea(length, width) {
  if (length <= 0 || width <= 0) {
    return
  } else {
    var result = length * width;
    return result;
  }

}
function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return
  } else { var result = base * height / 2;
    return result; }
  
}

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return
  }
  else { var result = 3.14159265359 * radius *  radius;
    return result; }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));

// function howManyHundreds (num){
//   var hundred = Math.round(num / 100 - .50);
//   return hundred;
// };
// console.log(howManyHundreds(900));