// defination of functions

function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
}

// sayMyName()

// function addToNumber(number1 , number2){
//     console.log(number1 + number2);
// }


function addToNumber(number1 , number2){
    return (number1 + number2);
}

// addToNumber(10,20)
// Output: 30   

const result = addToNumber(10,20)
// console.log(result)

function loginUserMessage(username){
    return `Hello ${username}, Welcome to our website`
}
// console.log(loginUserMessage("Sam"))


function calculateCartPrice(...num1){    //rest operator
    return num1
}

// console.log(calculateCartPrice(1000))
// Output: 1000;
// console.log(calculateCartPrice(1000,2000));
// Output: [1000,2000]

const user = {
    username: "Sam",
    price: 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({username: "Ram", price: 2000})
// Output: Username is Ram and price is 2000

