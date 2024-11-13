// iterators: array,string,map,set etc in saab mein iterator object use hota hai jiss ki vajah se hum for of use karte hai 

// let arr=[1,2,3,4,6,5,8];
// console.log(arr[Symbol.iterator]);
// [Symbol.iterator]--> yr iterator ka object hai

// // use of for of: ye value ko store karane ke liye use karta hai phir eke ke karr ke output aayega or ye siraf array list or string ke liye use hog kyonki ye iterators hai 

// for (i of arr) {
//     console.log(i);
//     console.log(arr[i]);
// }

// use of for in : ye siraf object ke liye use hota hai kyonki obj iterator nahi hote or for in mein output siraf key aati hai values ka output nahi aata 
 
let obj= 'saabki maa chod denge'
 for (d of obj){
    console.log(d);
    console.log(obj[d]);
 }