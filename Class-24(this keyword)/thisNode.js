
// 1. 
// console.log(this); // {} 



// 2. using function 

// this print global object of NodeJS
function test(){
   
    console.log(this);
    
}

test();



// 3. Objects 
// whole object print
// const obj = {
//     name: "Adam",
//     age: 36,
//     fn: function(){
//         console.log(this);
//     }
// }


// obj.fn();

// // global print
// const obj = {
//     name: "Adam",
//     age: 36,
//     fn: function(){
//         let lastFun = function() {
//             console.log(this);
//         }
//         lastFun();
//     }
// }


// obj.fn();