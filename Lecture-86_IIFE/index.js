//IIFE >Immediately Invoked Function Expression
//>It's a way to define and execute a function at the same time
// Additionally we can use promise, async await, .then .catch and every functionality with IIFE.

//In JavaScript, functions can be defined and invoked separately like this:
function greet() {
    console.log("Hello! im a normal function");
}

greet(); // Invoking the function


//   With an IIFE, you can combine the definition and invocation into a single expression. Here's an example:

(function () {
    console.log("Hello!");
})();


//Basic syntax
(function () {
    // Code goes here
})();


//          ***practice makes a man perfect***          *
(function () {
    document.body.innerHTML = `Hey i'm inside IIFE`
    console.log(`this console is inside the IIFE`)
})();

//async await using IIFE
(async() => {
    let a = new Promise((resolve, reject) => {
        resolve('hello world')
    })

    let b = new Promise((resolve, reject) => {
        resolve('hello world Again')
    })
    
    let x = await b;
    console.log(x);
    let y = await a;
    console.log(y)
})();


//   using async IIFE we can print the element of an array every after a particuler time
const text = [
    'Initializing Hacking program...',
    'Trying to hack Facebook...',
    'Username Found Md gnrl ****...',
    'Getting Password...',
    'Attempts 200k time but failed. Trying Again...',
    'Another 200k Attempts Done...',
    'found id Md Gnrl Moin...',
    'Hacking E-mail address...',
    'Found E-mail ahemdmoin3200@gmail.com...',
    'Trying to Hack the Password',
    'Password Hacked!...',
    'the Password is *********',
    'Sent all information to Database...',
    'Broom we are Done!...'
  ];

  //IIFE
//   (async () => {
//     for (let i = 0; i < text.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
  
//       console.log(text[i]);
//     }
//   })();


  //Another 0ne creativity
  (async function() {
    let a = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Hello world!')
        }, 2000);
    })

    let b = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Hello world! another time');
        }, 3000);
    })

    let x = await b;
    console.log(x)
    let y = await a;
    console.log(y)

})();