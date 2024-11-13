console.log(1+2); //3
console.log(1+"2");// 12 Explanation: number 1 is converted to string type before contact with string 2
console.log(5-"2"); // 3 Explanation: string 2 get converted into number to perform substraction with number 5
console.log(10 + 'A'); //10A
console.log(10 - 'A');// NaN
console.log(10 + "2" - "A");//NaN
console.log((typeof(1+"2")));//string
console.log(10 +"0"+"2");//1002

//string to number
let a='20';
console.log(typeof a );
let c= Number(a); // aagar hume kisi bhi value ko change karna ho jaise idhar string se number hai vaisi aagar string ko number ki baajaye kisis orr mein badalna ho toh bss number ki jagah vo likhdo like array,etc

console.log(c);
let d = parseInt(a);// parseInt is use to change number to Integer
console.log(d);