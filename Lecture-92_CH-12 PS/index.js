// Chapter 12 PS starts from here
//problem1
// let a = async (text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);
//     })
// }

// (async()=>{
//     let x = await a('Hello');
//     console.log(x)
//     let y = await a('World');
//     console.log(y)
// })();

//problem 2
// let average = (a,b,c)=>{
//     return (a+b+c)/3
// }

// let myarray = [2,4,5];
// console.log(average(...myarray))

//problem 3
// let a = async (text,n)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(text)
//         }, 1000*n);
//     })
// }

// (async()=>{
//     let x = await a('Hello',3);
//     console.log(x)
//     let y = await a('World',5);
//     console.log(y)
// })();

//problem 4
// let simpleinterest = (p,r,t)=>{
//     return (p*r*t)/100
// }

// console.log(simpleinterest(100,5,1));



// practice makes a man perfect 
let a = async (text,n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },n)
    })
}

( async ()=>{
    let x = await a('Hello',3000);
    console.log(x)
    let y = await a('World',5000)
    console.log(y)
})();

let average = (a,b,c)=>{
    return (a+b+c)/3
}

console.log(average(4,6,3))

let simpleinterest = (p,r,t)=>{
    return (p*r*t)/100;
}

console.log('The interest is ',simpleinterest(100,5,1), 'tk')