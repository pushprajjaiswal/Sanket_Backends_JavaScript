// Operators in Javascript
// Arithmetic operators: +, -, *, /, % (modulus)
// Assignment operators: =, +=, -=, *=, /=, %=
let x = 10;
console.log(x); // Outputs 10
x += 5;
console.log(x); // Outputs 15
// Comparison operators: ==, !=, ===, !==, <, >, <=,
// => The "===" operator checks both value and type of the operands
// Logical operators: &&, ||, !
// Bitwise operators: &, |, ^
// Existence operator: in

// Type coercion is automatic in JavaScript when you compare values of different data types using
// comparison or logical operators. This can lead to unexpected results if not handled properly.
if (3 == '3') {
    console.log('They are equal');
    } else {
    console.log('They are not equal');
    }
    // To avoid this behavior use the "==" operator for loose equality which only compares values and not types.
    
// To avoid this kind of errors, use the "==" operator for equality testing. It performs a loose equality test
    let num = 42;
    if (num === '42') {
        console.log('This will never be executed because JS does type coercion');
    }

// Ternary operator: condition ? exprIfTrue : exprIfFalse
let age = 26;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Outputs Yes

// Increment/Decrement operators ++, --
// Postfix increment/decrements come after the variable while prefix comes before
let i = 1;
i++; // i becomes 2
console.log(i); // Outputs 2
++i; // i becomes 3
console.log(i); // Outputs 3

i--; // i becomes 2
console.log(i); // Outputs 2
--i; // i becomes 1
console.log(i); // Outputs 1

// Assignment operators: +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, |=, ^=
a = 7;  
b = 3;  
c = a + b;       // c is now 10
d = a - b;       // d is now 4
e = a * b;       // e is now 21
f = a / b;       // f is now 7
g = a % b;       // g is now 1
h = a << 1;      // h is now 14
j = a >> 1;      // j is now 3
k = -a;         // k is now -7
l = ~a;         // l is now -8
m = a & b;       // m is now 1
n = a | b;       // n is now 8
o = a ^ b;       // o is now 4 
// Comma operator ,
x = 1, y = 2, z = 3;
console.log(`${x}, ${y}, ${z}`); // Outputs "1, 2, 3"
// Grouping Parentheses ()
result = ((5+2)*(3-1))/4;
console.log(result); // Outputs 9  

