// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num>4;
// })

const book = [
    {title: "Book 1", genre: "Fiction", publish: 2001},
    {title: "Book 2", genre: "Non-Fiction", publish: 1999},
    {title: "Book 3", genre: "Fiction", publish: 2005},
    {title: "Book 4", genre: "Non-Fiction", publish: 2010},
    {title: "Book 5", genre: "Fiction", publish: 2015},
    {title: "Book 6", genre: "Non-Fiction", publish: 2020},
    {title: "Book 7", genre: "Fiction", publish: 2021},
    {title: "Book 8", genre: "Non-Fiction", publish: 2022},
    {title: "Book 9", genre: "Fiction", publish: 2023},
    {title: "Book 10", genre: "Non-Fiction", publish: 2024},
];

// const userBooks = book.filter((bk) => bk.genre === "Fiction" )
const userBooks = book.filter((bk) => {return bk.publish >= 2000 && bk.genre === "Fiction"})    

console.log(userBooks);

