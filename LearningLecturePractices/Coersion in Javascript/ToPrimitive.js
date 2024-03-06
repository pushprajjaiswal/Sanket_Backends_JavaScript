// let obj = {
//     toString(){
//         return "Lets learn JavaScript"; // By default give Object Object;
//     }
//     valueOf(){
//         // by default its return same Object
//     }
// };
// console.log(obj.toString()); // Output: Lets learn JavaScript
// console.log(typeof obj.toString()); // Output: Lets learn JavaScript

// let obj ={x : 10., valueOf(){
//     return 10;
// }};
// console.log(obj.valueOf());

let obj = {}
console.log(10 - obj); // Output NaN
console.log(obj - obj); // Output NaN // obj.valueOf()--> obejct, toString --> [object,object]

let obj1 = {
    x:9,y:8
};
console.log(100 - obj1);

let obj2 = {x: 7, valueOf() { return 99}};
console.log(100 - obj2); // output 1

let obj3 = {x: 7, toString() { return "98"}};
console.log(100 - obj3); // output 2

// let obj4 = {x: 7, toString() { return {}}};
// console.log(100 - obj4); // output -> TypeError: Cannot convert object to primitive value 
 

// unary + operator
let num = -56;
console.log(`Unary + Operator ${+num}`); // Unary + Operator
// equality operator 
// 1. (==) -> Abstract equality
// 2. (===) -> struict equality

/*
// 7.2.14 Abstract Equality Comparison
// The comparison x == y, where x and y are values, produces true or false. Such a comparison is
// performed as follows:
1. If Type(x) is the same as Type(y), then
a. Return the result of performing Strict Equality Comparison x === y.
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x ==! ToNumber(y).
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
7. If Type(y) is Boolean, return the result of the comparison x ==! ToNumber(y).
8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the
comparison x == ToPrimitive(y).
9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the
comparison ToPrimitive(x) == y.
10. Return false.
*/