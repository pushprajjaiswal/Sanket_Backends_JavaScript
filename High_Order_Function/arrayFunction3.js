/**
 * reduce the HOF function available for the arrays
 * reduce also takes a function f as a argument ,
 * what reduce does is, it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and accumulate the result of further function calls
 * with this perticular result
 */


const arr = [1,2,3,4,5];
function sum (preRes, currVal) {
    console.log(preRes, currVal);
    return preRes + currVal;
}

const result = arr.reduce(sum);
console.log(result); // Output: 15
/**
 * first element --> 2
 * second elememt --> 3
 * ...
 */

/**
 * Cart --> [iphone {price: 1000 name: "Iphone"}, case {price : 500, name: "backcover"}, tempered glass {price : 300, name: tempered glass}]
 */
function addPrices(preRes, currVal) {
    console.log(preRes, currVal);
    let newPrice = preRes.price + currVal.price;
    return {price: newPrice};
}
let cart = [{price: 1000000, name: "iphone"}, {price: 500, name:"backcover"}, {price: 300, name: "temperd glass"}];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice,totalPrice.price);