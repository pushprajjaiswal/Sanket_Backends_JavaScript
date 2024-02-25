

// console.log(name); // ufndefined // no error if variable is declared (Var)
// var name = "Pushpraj" 
// // console.log(name); // error
// // let name = "Pushpraj" // Global Name
// function fun() {
//     console.log(name);
// }
// fun();
// console.log(name); // Pushpraj

var teacher = "Sanket";
function fun(){
    var teacher = "Pushpraj";
    console.log(teacher);
}

function gun(){
    var student = "Appu";
    console.log(student);
}
fun();
gun();
console.log(teacher);