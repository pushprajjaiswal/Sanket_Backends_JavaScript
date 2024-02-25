"use strict";
var teacher = "Sanket";
function fun(){
    var teacher = "Pushpraj";
    Content = "JS";      // in strict mode stop creation of global variable
    console.log(teacher);
}

function gun(){
    var student = "Appu";
    console.log(student);
}
// console.log(Content);
fun();
gun();
console.log(teacher);
console.log(Content);
