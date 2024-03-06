// ToString Abstract operation 
// Tostring --> "" + value
console.log("" + (-0));
console.log("" + 0);

console.log("" + []); // [] --> ""
console.log("" + {}); // {} -->  [object Object]

console.log("" + [1,2,3]); // 1,2,3
console.log("" + [null, undefined]); // ,

console.log("" + [1,2,3,null,4]); // 1,2,3,,4



// ToNumber
console.log(0 - "010"); // normal decimal in strig
console.log(0 - "O10");
console.log(0 - 010); // octal number when aange zero rahega to or direct number rahega

console.log(0 - 0xb); // -11
console.log(0 - "0xb"); // -11

console.log([] - 1);  // -1
console.log(1 - []); // 1
console.log([""] - 1); // -1
console.log(["0"] - 1); // -1