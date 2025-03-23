const user = {
    username: "suraj",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // in browser it show windoe,and in node{}

//not use in function
// function chai() {
//     console.log(this);
    
// }
// chai()

//arrow function
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);  //  {}
//     console.log(this.user);  //  undefine
    
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// // addTwo(3,4)
// console.log(addTwo(3,4));

//implicite return 
const addTwo = (num1,num2) =>  num1+num2
console.log(addTwo(3,4));
