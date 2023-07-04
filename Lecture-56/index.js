// // promise chaining
// let p1 = new Promise((resovle, reject) => {
//     console.log('promise 1 pending');
//     setTimeout(() => {
//         document.body.innerHTML = 'promise 1 resolved';
//         // resovle(true)
//         reject(new Error('Promise got some error'))
//     }, 2000);
// }).then(() => {
//     console.log('promise 1 fulfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 2 pending...');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise two resolved'
//             resolve(true)
//         }, 2000);
//     })
// }, (() => {
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 2 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 3 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise three resolved'
//             resolve(true)
//         }, 2000);
//     })
// },(()=>{
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 3 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 4 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise four resolved'
//             resolve(true)
//         }, 2000);
//     })
// }).then(() => {
//     console.log('promise 4 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 5 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise five resolved'
//             resolve(true)
//         }, 2000);
//     })
// },(()=>{
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 5 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 6 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise six resolved'
//             // resolve(true)
//             reject(new Error())
//         }, 2000);
//     })
// },(()=>{
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 6 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 7 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise Seven resolved'
//             resolve(true)
//         }, 2000);
//     })
// },(()=>{
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 7 fullfilled');
//     return new Promise((resolve, reject) => {
//         console.log('promise 8 pending');
//         setTimeout(() => {
//             document.body.innerHTML = 'promise Eight resolved'
//             resolve(true)
//         }, 2000);
//     })
// },(()=>{
//     console.log('having som issues')
// })).then(() => {
//     console.log('promise 8 fullfilled');
// })

// loadscript using promise
const LoadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve('Script Loaded')
        };
        script.onerror = () => {
            reject('Failed to Load the Script');
        }
    })
}
let p1 = LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
p1.then((value)=>{
    console.log(value);
    return LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
}).catch((value)=>{
    console.log(value);
}).then((value)=>{
    console.log(value);
    return LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
}).catch((value)=>{
    console.log(value);
}).then((value)=>{
    console.log(value);
    return LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
}).catch((value)=>{
    console.log(value);
}).then((value)=>{
    console.log(value);
    return LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
}).catch((value)=>{
    console.log(value);
}).then((value)=>{
    console.log(value);
    return LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
}).catch((value)=>{
    console.log(value);
}).then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})