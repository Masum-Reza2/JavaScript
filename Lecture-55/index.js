// let p1 = new Promise((resolve,reject)=>{
//     console.log('Promise is panding')
//     setTimeout(()=>{
//         console.log('im a promise and im resolved!');
//         resolve('promise completed');
//     },5000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     console.log('Promise is panding')
//     setTimeout(()=>{
//         console.log('im a promise and im rejected!');
//         reject(new Error())
//     },5000)
// })

// console.log(p1, p2);

// // To get the value
// p1.then((value)=>{
//     console.log(value)
//     document.body.insertAdjacentHTML('afterbegin','<p>promise 1 done!</p>')
// })

// // To catch the the error
// p2.catch((value)=>{
//     console.log(value)
//     document.body.insertAdjacentHTML('beforeend','<p>promise 2 got some error!</p>')

// })

// //success or error in short
// p2.then(()=>{
//     document.body.insertAdjacentHTML('beforeend','<p>promise 2 completed!</p>')
// },(error)=>{
//     document.body.insertAdjacentHTML('beforeend','<p>promise 2 failed!</p>')
// })





//practice makes a man perfect
let p1 = new Promise((resolve, reject) => {
    console.log("i'm promise 1 and pending");
    setTimeout(()=>{
        console.log('Promise one completed!')
        resolve('Done')
        // reject(new Error());
    },4000);
})
p1.then(()=>{
    document.body.insertAdjacentHTML('beforeend','<p>Promise one completed</p>')
},()=>{
    console.log('some error occured in p1')
    document.body.insertAdjacentHTML('beforeend','<p>Promise one failed</p>')
})

p2 = new Promise((resolve, reject)=>{
    console.log('p2 pending');
    setTimeout(()=>{
        console.log('p2 timeout done')
        reject(new Error('got error'))
    }, 4000)
});
p2.catch(()=>{
    console.log('some error occured in p2')
    document.body.insertAdjacentHTML('beforeend','<p>Promise two failed</p>')
})