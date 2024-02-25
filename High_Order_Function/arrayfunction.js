/*
    arrrays are also costums objects in JS
    index of element is the key and the element it self is the value
    ["abc","def","ghi"] --> {0:"abc". 1:"def", 2: "ghi"}
*/

/**
 * map function 
 * map is the higher order function with arrays
 * it take function as an argument --> f
 * it returns an array in which every value is actually populated by calling 
 * function f with original array element as argument 
 * every element of the original array passed one by one in the argument function f
 * whatever is the output for each individual element , we populate that output in an array
 * 
 * map internally iterates. loops over every element of the given original array pass that element int he argument function f and then store the returned
 * value inside an array.
 */

function square(el) {
    return el * el; // return square
}

function cube(x) {
    return x * x * x;
}

const arr = [1,2,3,4,5];

const result = arr.map(square); // fun square passed as argument
console.log(result);

const cuberesult = arr.map(cube);
console.log(cuberesult);