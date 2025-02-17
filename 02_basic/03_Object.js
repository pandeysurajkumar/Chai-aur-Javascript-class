 // singleton 
 // Object.create

// Object litereals

const mySym = Symbol("key1")

const jsUser = {
    name: "Suraj",
    "fill name": "Suarj Kuamr Pandey",
    // mySym: "mykey1",     //error
    [mySym]: "mykey1",        // valid
    age: 20,
    location: "Bihar",
    email: "amit@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["MOn","Tue"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// // console.log(jsUser.mySym);
// console.log(jsUser[mySym]);   //for symbol

// Object.freeze(jsUser)   // don't allow any change further  /

jsUser.greeting = function(){
    console.log("Hello js User");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello js User, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


