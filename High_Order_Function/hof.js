// in higher order function --> there are function which take another function as arguments
// these are called higher order functions

function f(x, fn) {
    /*
     * x --> number
     * fn --> functin
    */
    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exec() {
    console.log("I am an expression passed to HOF")
})

let arr = [1, 10, 100, 1000, 11, 12, 13, 14, 2,3]; // unsorted array

arr.sort(); // it sorts the given array // [expectation]
/**
 * default implementation of arr.sort is going to sort my array in lxicographical order
 * 0 --> A
 * 1 --> B
 * 2 --> C
 * 3 --> D
 * .
 * .
 * .
 * [B,BA,J ,BAA, BAAA, BB, BC, BD, BE,B, C ] // if be arranege according to the dictionary
 * [B,BA,BAA,BB,BC,BD,..........Z] // if be arranged according to the dictionary
 */
console.log(arr); // but its sort in lexicographical order   

let b = [1, 10, 9, 5, 45, 23, 32, 54, 11, 32, 7];

// sort b in increasing order
b.sort(function (a, b) { 
    /**
     * if a < b  --> a - b will be negative --> if cmp function givees negative then a is placed before b (a < b)
     * if a > b --> a -b will be positive --> id cmp function give positive then b is placed before a ( a> b)
     * 
     * */    
    return a - b;
}); // sort is HOF, the sort  function takes  a  compare function as argument which tells how the elements should be sort

console.log(b);

