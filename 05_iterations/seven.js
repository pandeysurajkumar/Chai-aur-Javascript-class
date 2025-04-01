const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNums = myNumbers.map((num) => num + 10)

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);


//// Array reduce
 const myNums =[1,2,3];
 const myTotal = myNums.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
 }, 0)
    console.log(myTotal);