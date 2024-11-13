// function expression:- anomymous fuction

const val = function sum(a, b) {

    return a + b;
};
console.log(val);
//console.log(sum(5,3));
console.log(val(5,3))
console.log(val(sum(5,3)));
