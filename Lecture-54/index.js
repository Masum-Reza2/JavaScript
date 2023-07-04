// let promise = new Promise(function(resolve, reject){
//     console.log('im a promise inside the promise')
//     resolve(56);
// })


// console.log('hello one');
// setTimeout(function (){
//     console.log('hello two')
// },2000);
// console.log('hello three')
// console.log(promise)

/*Creating a Promise:
You can create a new promise using the Promise constructor. It takes a function as an argument, commonly referred to as the "executor" function. The executor function receives two parameters: resolve and reject. These are functions used to indicate the outcome of the promise.
Here's an example of creating a simple promise that resolves after a fixed delay of 1 second:*/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1000);
  });
  
  myPromise.then((result) => {
    console.log(result); // Output: "Promise resolved!"
  });
  