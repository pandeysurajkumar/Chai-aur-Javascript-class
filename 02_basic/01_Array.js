// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]

const myArray = new Array(9,7,5,6)
// console.log(myArr[2]);  // 2


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //add at first
// myArr.shift()      // remove from first

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log((newArr));

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)    // don't manuplate

console.log(myn1);
console.log("B ", myArr);



const myn2 = myArr.splice(1,3)   // manuplate the array
console.log("C ", myArr);

console.log(myn2);


