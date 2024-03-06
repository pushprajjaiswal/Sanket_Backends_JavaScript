/**
 * probelms in callback
 * 1. Inversion of control
 * 2. Callback Hell
 */
let arr = [1,10,1000,93,2,4];

arr.sort(function cmp(a, b) {
    return a - b;
});

console.log(arr);