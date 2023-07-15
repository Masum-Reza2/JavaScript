let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.insertAdjacentHTML('beforeend','<p>Promise 1</p>')
        resolve('promise 1 fired')
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.insertAdjacentHTML('beforeend','<p>Promise 2</p>')
        // resolve('promise 2 fired')
        reject(new Error('promise got some error'))

    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.insertAdjacentHTML('beforeend','<p>Promise 3</p>')
        resolve('promise 3 fired')
    },3000)
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.insertAdjacentHTML('beforeend','<p>Promise 4</p>')
        resolve('promise 4 fired')
    },4000)
})
let p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.insertAdjacentHTML('beforeend','<p>Promise 5</p>')
        resolve('promise 5 fired')
    },5000)
})

    // p1.then((value)=>{
    //     console.log(value)
    // })
    // p2.then((value)=>{
    //     console.log(value)
    // })
    // p3.then((value)=>{
    //     console.log(value)
    // })
    // p4.then((value)=>{
    //     console.log(value)
    // })
    // p5.then((value)=>{
    //     console.log(value)
    // })

// let promise_ALL = Promise.all([p1, p2, p3, p4, p5]); //it will print all promise at one time after resolving the last promise. if anyone rejected it will through error!

// let promise_ALL = Promise.allSettled([p1, p2, p3, p4, p5]); //it will print all promise status at one time either resolved or rejected. it will never through error!

// let promise_ALL = Promise.race([p1, p2, p3, p4, p5]); // it will print the first resolved promise, if firstone rejected will through error!

// let promise_ALL = Promise.any([p1, p2, p3, p4, p5]); // it will print the first resolved promise, if firstone rejected search for the nextone never through error!

// let promise_ALL = Promise.resolve([p1, p2, p3, p4, p5]);  //print the result with status
let promise_ALL = Promise.allSettled([p1, p2, p3, p4, p5]); //print the result with status in error mood!
promise_ALL.then((value)=>{
    console.log(value)
});