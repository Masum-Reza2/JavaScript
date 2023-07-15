//Synchronous programming
//line by line execution each line of code is executed one after another in the order they appear. 
//The program waits for each line of code to complete before moving on to the next one

// let a = prompt('What is your name?');
// let b = prompt('What is your age?')
// let c = prompt('What is your favourite color?')
// console.log(a,' is ', b,' years old and has favourite color ', c)

// Asynchronous programming
//Asynchronous code doesn't wait for a line of code to complete before moving on to the next one. 
//It allows multiple operations to be performed simultaneously, without blocking the execution of the program.
// console.log('start')
// setTimeout(
//     myfunc = () => {
//         console.log('Hey this is async programming')
//     }
//     , 4000)
// console.log('end')

// callback function  and error handling
// a callback function is a function passed into another function as an argument, which is then involved inside the outer function to complete an action.
// callback and error handling
let loadscript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = () =>{
        callback(null, src);
    }
    script.onerror = () =>{
        callback(new Error('script got some error'));
    }
}

let LOADorNOT = (error,src) =>{
    if(error){
        console.log(error);
        document.body.innerHTML = 'Script loading error';
        console.log('error loading script');
        alert('error script loading');
    }
    else{
        document.body.innerHTML = 'Script loaded successfully';
        console.log('loading script successful');
        alert('script loaded');
    }
}
loadscript('https://cdn.jssexdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', LOADorNOT)