/* 7.2.15 Strict Equality Comparison
The comparison x === y, where x and y are values, produces true or false. Such a comparison is
performed as follows:

1. If Type(x) is different from Type(y), return false.
2. If Type(x) is Number, then
a. If x is NaN, return false.
b. If y is NaN, return false.
c. If x is the same Number value as y, return true.
d. If x is +0 and y is -0, return true.
e. If x is -0 and y is +0, return true.
f. Return false.
3. Return SameValueNonNumber(x, y).
*/
// console.log(NaN === NaN);
// console.log("10" === 10); // false
// console.log(0 === -0); // true

// SameValueNonNumber(x, y)
let obj1 = { x : 10}
let obj2 = { x : 10}
let obj3 = { y : 10}

console.log(obj1 === obj2); // compare the different memory location 
console.log(obj1 === obj3); // compare the different memeory location
console.log(obj1 === obj1); // true// same memeroy comparision 
