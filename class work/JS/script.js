// let and const: temprarel dead zone: reffrence error

// console.log(a);
// myfunc() // it is use to call function
// const a = 10;
//console.log(a)
console.log(myfunc()); //call function
console.log(a);
var a = 10;

function myfunc(){
    var b = 20;
    console.log(b)
}
myfunc();
