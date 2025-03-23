//let var cons

// let a = 10
// const b = 20
// var c = 30
// {} scope
if(true){
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a); //not
// console.log(b); // not
// console.log(c); //yes //not use much incode

//vedio_22
function one(){
    const username = "suraj"
    function two(){
        const website = "youtube"
        // console.log((username));
    }
    // console.log(website);

    two()
    
}
one()
 //******************interesting */

 addone(5) // 6
 function addone(num){
    return num + 1
 }

 addtwo(5)  //error bec. we initilize the function in variable
const addtwo = function(num){
    return num+2
}