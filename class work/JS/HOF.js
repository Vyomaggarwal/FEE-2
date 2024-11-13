// higher order function: ye function ke andar ek or function rakhta hai as a replacement ke liye

// print name 20 times

// function printName(func , num) {
//     for (let i = 1; i <= num; i++ ) {
//         func();
//     }
// }

// // iske niche se fallback function shuru hogaya taaki jo upper function bnaya haia vo chal jaaye input daal ke 

// let myName = function() {
//     console.log("sherrrrrrrrrrr");

// };
// printName(myName, 52);

// make a hof function to check even numbers

let arr = [2,3,4,5,6,7,8,9];   //even or not
function evenORnot(func, arr){
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}
const even = function (num){
    if (num % 2 == 0){
        console.log(num);
    } else {
        console.log("not even");
    }
};
evenORnot(even, arr);
