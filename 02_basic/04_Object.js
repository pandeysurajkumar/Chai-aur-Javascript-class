// constructor
// singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "san@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "badhur"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3= {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);
