// Nan in Jvasccript
console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);       // false, because "==" checks for equality not identity
console.log(x === NaN);      // false, because "===" checks for identity not equality 

console.log(isNaN(x));        // true, isNaN() returns a boolean value (true or false) indicating whether the passed
// The isNaN() function returns true if the passed argument is Not-a-Number (NaN), and false otherwise. It does this by using the strict equality operator (===) to check

console.log(isNaN("pushpraj"));  // isNaN convert the incoming input to a number

console.log(Number.isNaN("pushpraj")); // false

console.log(Number.isNaN(x)); // True

if(typeof(x) == 'number' && x !== x){
    console.log(true);   // It will print true if variable x is NaN
}
