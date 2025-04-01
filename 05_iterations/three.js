// for of

// ["","",""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello World"
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
    
// }


// Maps

const map = new Map()
map.set('name', 'Suraj')
map.set('age', 25)
map.set('isStudent', true)

// console.log((map));

for(const [key,value] of map){
    // console.log(key,':-', value); 
}

// objects
const obj = {
    'name': 'Suraj',
    'age': 25,
    'isStudent': true
}

for(const key in obj) {
    console.log(key, ':', obj[key]);
    
}