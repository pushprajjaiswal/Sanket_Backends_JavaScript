var teacher = "Sanket"; // global
function fun() { // global
    var teacher = "Pulkit"; // fun
    let content = "JS"; // fun
    if(conten == "JS") { // fun 
        let hours = "120+"; // if
    }
    console.log(teacher,content); // fun

}
fun(); // global
console.log(teacher);
console.log(content);


// when we use block scoping use let keyword for variable declaration

var x = 9
var x = 10;
// var  -->  allow redeclaration
// let -->  doestn't allow redeclaration

// let x = 9;
// let x = 10