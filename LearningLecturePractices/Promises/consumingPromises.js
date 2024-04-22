const { resolve } = require("path");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promises constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0) {
                resolve(num);
            }else {
                reject(num);
            }
        }, 10000);
        console.log("Exitting the executor callback in the promise constructor");
    });
}

console.log("Starting ......");

const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ... ",p);
p
.then(
    function fulfillHandler(value) {
        console.log("Inside fulfill handler with value", value);
        console.log("Promise after fullfillment is", p);
    },
    function rejectionHandler(value) {
        console.log("Inside rejection handler with value", value);
        console.log("Promise after rejection is", p);

    }
);



 