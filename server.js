// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

// var add=(a,b)=>{
//     return a+b;
// }

var add=(a,b)=> a+b;

var result = add(7,5);
console.log(result);


(function(){
    console.log("Akash singh");
})()



const notes=require('./notes.js')

var age=notes.age;
console.log(age);
var agadde=notes.add(20,30);
console.log(agadde);