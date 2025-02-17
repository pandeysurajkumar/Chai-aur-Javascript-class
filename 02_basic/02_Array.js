const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

// spread operator
const allHeros =  [...marvel_heros, ...dc]
// console.log(allHeros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_anotherarray = another_array.flat(Infinity)
// console.log(real_anotherarray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));   //interrsting

let s1 = 10
let s2 = 20
let s3 = 30

console.log(Array.of(s1,s2,s3));





