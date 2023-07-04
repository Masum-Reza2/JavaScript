//when we call a function or variable before initialization if it works then it is Hoisting
//hoisting is a mechanism that allows you to use variables and functions before they are declared in your code

console.log(a);  //this is called hoisting
var a = 67;
// const a = 67;
// let a = 67;
console.log(a)


greet(); //this is called hoisting cz called before initialize but if we build the function with let or const
// then we will face error

function greet (){
    console.log('hello world!')
}




// tullu() //in this case we are facing error
//so kiya samje daya. let or const never give you the opportunities to access before initialization

let tullu = ()=>{
    console.log(`im a function using let`)
}


let munnu;
console.log(munnu)
munnu = 'chunnu'
console.log(munnu)

// i can imagine something that, things after ES-6 can not be hoisted; before ES- like var and old function can be hoisted