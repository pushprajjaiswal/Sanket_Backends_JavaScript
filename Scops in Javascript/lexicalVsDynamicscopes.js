var teacher = "Sanket"; // teacher --> global --> sanket
function ask(question){ // ask --> global, question --> ask
    console.log(teacher, question); // sanket why
}

function fun() { // fun --> global
    var teacher = "Pushpraj"; // teacher --> fun --> pushpraj
    ask("Why?");
}
fun(); // Output: Sanket Why? 

// javascript by default support lexical scoping