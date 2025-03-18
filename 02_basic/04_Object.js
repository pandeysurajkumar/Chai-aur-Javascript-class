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

// const obj3= {obj1,obj2}  //not correct way to combine ,it will show to obj in one object
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// from server 
const users = [
    {
        id: 1,
        name: "sam"
    },
    {
        id: 2,
        name: "ram"
    },
]

// users[1].id
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("id"));


// destructuring..........................

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Sam"
}

// course.courseInstructor   

// const  {courseInstructor} = course
const  {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// example of api
// {
//     "name": "sam",
//     "coursename": "JS",
//     "price": "999",
// }
