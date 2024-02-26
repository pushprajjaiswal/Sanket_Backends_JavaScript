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


/**
 * when to use map  ?
 * in any situation when  we have to do an operation on every element of the array
 * and store the result of each operation
 * mao can be a good option
 * 
 * for example:
 * Array of products objects.
 * 
 */


const newArr = [9,7,5,6,3,4,5];
/**
 * if the function that we are paasing in map takes two arguments
 * then first argument will be passing the actual value
 * second argument will be accessing index of the value
 */
function print(element, idx) {
    return `Element at ${idx} is ${element}`;
}

/**
 * here map is looping over every element
 * and then passing element, index int the function print
 */

const result2 = newArr.map(print);
console.log(result2);

function customMapper(arr, func) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i));
    }
    return result;
}

const value = customMapper(newArr, print);
console.log(value);