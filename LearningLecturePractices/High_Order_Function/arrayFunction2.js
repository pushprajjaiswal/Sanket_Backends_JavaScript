/**
 * Filter function 
 * filtor function is HOF  (High Order Function)
 *  Filtor also loops over the array element
 * there is one special thing about filtor , i . e the argument function f which we have to pass inside
 * filter should always return a boolean, otherwiese outout will be converted to a boolean
 * 
 * Filter loops over every element, passes that element in the argument function and then if the output
 * of the this function call is true, then it stores the original element in a new array otherwise
 * doesn't add this element to the array
 */

function oddOrEven(x) {
    return (x % 2 == 0);
}

let arr = [1,2,3,4,5,6,7,8,9];
const result = arr.filter(oddOrEven); // returns an array of all elements that are true for the condition in the callback function

console.log(result);