//Immediately Invoked Function Expressions (IIFE)
// immediate call function and not polluted by global variable

//// without iife
// function chai(){
//     console.log(`DB connected`);
    
// }
// chai()

// with iife
(function chai(){
    // named iife
    console.log(`DB connected`);
    
})();  // dont't forget to use ; to end the function

// by arrow iife

( (name) => {
    //unnamed iife
    console.log(`DB connected two ${name}`);
    
})('Suraj');