//we are human being we make mistakes, our script also!
//usually a program halts when an error occures
//the try catch syntax allows to catch error and prevent halting of execution
//it works syncronously, never work in async program 


setTimeout(() => {
    console.log('Hacking wifi...please wait...')
}, 1000);

try {
    console.log(rahul)
} catch (error) {
    console.log(error)
}

// try {
//     setTimeout(() => {
//         console.log(rahul)
//     }, 100);
// } catch (error) {
//     console.log(error)
// } // this will never work bcz try catch works syncronously

// try {
//     setTimeout(() => {
//         try { console.log(rahul) }catch (error) { console.log(error) }
//     }, 100);
// } catch (error) {
//     console.log(error)
// }// it will work 

setTimeout(() => {
    console.log('fethcing username and password...please wait...')
}, 2000);

setTimeout(() => {
    console.log('Hacking Rahul\'s facebook id...please wait...')
}, 3000);

setTimeout(() => {
    console.log('Username and password of rahul(01863547364) fetched...please wait...')
}, 4000);