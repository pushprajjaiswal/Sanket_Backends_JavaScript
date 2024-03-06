function timeConsumeByLoop() {
    console.log("Loop starts");
    for(let i = 0; i < 10000000000; i++) {
        //some task
    }
    console.log("Loop ends");
}

function timeConsumeByRuntimeFeatures0() {
    console.log("Starting timer 0");
    setTimeout(function exec0(){
        console.log("Completed the timer 0"); 
        for(let i = 0; i < 100000000; i++){
        //some task
        }
    }, 5000); // 5 sec. timer
}

function timeConsumeByRuntimeFeatures1() {
    console.log("Starting timer 1");
    setTimeout(function exec1(){
        console.log("Completed the timer 1"); 
    }, 0); // 0 timer
}

function timeConsumeByRuntimeFeatures2() {
    console.log("Starting timer 2");
    setTimeout(function exec2() {
        console.log("Completed the timer 2");
    }, 200); // 200 ms secf
}

console.log("Hi");
timeConsumeByLoop();
timeConsumeByRuntimeFeatures0();
timeConsumeByRuntimeFeatures1();
timeConsumeByRuntimeFeatures2();
timeConsumeByLoop();
console.log("Bye");
