// Primitive 

// 7 type : String ,Number,Boolean,null,undefined,Symbol,BigInt

// JavaScript is dynamically typed.



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTamp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);   //false




// Reference (Non-primitive)

// Array, Objects, Functions


const heros = ["sun","mun","tun"];

let myObj = {
    name: "dum",
    age: 4,
}

const myfunction = function(){
    console.log("Hello World");
    
}

// ****************************************************

//Stack(primitive),heap(non-primitive)

//copy are provided to any variable in stack and work done on copyed item 

// Reference is provided to varible in heap, change in one effect on other ,means work on actual one