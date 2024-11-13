// object can be declared in 2 ways

// constructor and literal

// a) constructor
// var obj= new Object();
// obj.name="Tej";
// console.log(obj.name);



// // literals
// // here key is name and value is tejinder
// var user ={
//     name: "TEJINDER",
//     'full name' :'Tejinder Kaur',
//     class: "FEE",
//     rollno : 38,
//     CGPA : 8.6
// }
// // agar key ki multiple values hain toh use square brackets
// console.log(user['full name'])
// // this circular bracket on multiple values does not work
// // console.log(user('full name'))
// console.log(user.name)
// console.log(typeof user.name)




// changing/updating object value
// user.name="Mohit";
// console.log(user)



//3. object inside an object
// var users={
//     user1:{
//         name:"Piyush",
//         age :23
//     },
//     user2:{
//         name:"Aaina",
//         age:21
//     },
//     user3:{
//         name:{Tej:'kaur'},
//         age:25,
//     }
// }
// console.log(users.user3.name)




// 4. object inside an array
// var classes =[
//     {
//         subject: "fee",
//         time: 11
//     },
//     { 
//         subject:"DBMS",
//         time: 9
//     },
//     { \
//         subject:"DS",
//         time:10

//     }

// ]
// console.log(classes[2])
// console.log(classes[1].subject)


// merging 2 object

//method 1
let obj1 ={
    name1:"yashi",
    age:25
}

let obj2={
    name2:"yashi",
    age:23
}

let obj3={...obj1,...obj2} //spread operator
// agar key same hai toh rewrite hoke second waali key print hogi
console.log(obj3)

//method 2
let obj4=Object.assign(obj1,obj2)
console.log(obj4)