function fun(){ // fun --> get a global scopes
    var x =10; // x --> fun scope
    function gun(){ // gun --> fun scope
        var y = 20; // y --> gun scope
        console.log(x); // 10 
        console.log(y); // 20 
    }
    gun();
    console.log(x); //10 
    console.log(y); //  ReferenceError: y is not defined at fun
}
fun();  