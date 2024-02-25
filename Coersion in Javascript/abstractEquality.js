console.log( null == undefined) // return true
console.log(100 == "100");
console.log(false == '0');
/*
  x -> boolean -> Tonumber -> false -> 0
  x = 0, y = "0", x == y
  y -> Tonumber
  0 == 0 -> true
*/
console.log(NaN == NaN);

let obj = { x: 10, valueOf() {return 100;}};
//obj -> ToPrimitive -> primitive data type -> valueOf method call -> 100
console.log(obj == 99); // false
console.log(obj == 100); // true


// convert object to toString 


// why should be use abstract equality
// case 1. 