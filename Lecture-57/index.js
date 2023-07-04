//we can attach multiple handler to a promise, they don't pass the result to each other,
//instead process it independentely 

let p1 = new Promise((resolve, reject) => {
    console.log('Promise is pending now!');
    setTimeout(() => {
        document.body.innerHTML = 'promise fired';
        resolve('congratulations! promise fired')
    }, 2000)
})
p1.then((value)=>{
    console.log(value)
})
p1.then(()=>{
    console.log('WOW! what a promise!')
});
p1.then(()=>{
    alert('re baba promise fired re baba')
});
p1.then(()=>{
    prompt('the promise is fired say something about this promise!');
    return new Promise((resolve,reject)=>{
        console.log("new promise pending!");
        setTimeout(()=>{
            document.body.innerHTML = 'new promise fired!'
            resolve('wow new promise also fired')
        },2000)
    }).then((value)=>{
        console.log(value)
    })
})

//Note: this is different from chaining of promise 