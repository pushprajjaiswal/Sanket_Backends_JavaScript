let x = -0;
console.log(x === 0); // true

// how to check value is -0 or not?
console.log(Object.is(x, -0)); // true
console.log(Object.is(x, 0)); // false


console.log(Math.sign(-3));
console.log(Math.sign(2));

console.log(Math.sign(-0));
console.log(Math.sign(0));

// can we write a custom function that can give us sign of number properly
// function mySign(num) {
//     if (num > 0) return 1;
//     else if (num < 0) return -1;
//     else return 0;
// }
// console.log(mySign(-3));
// console.log(mySign(2));
// console.log(mySign(-0));
// console.log(mySign(0));  // GHALAT HAI

