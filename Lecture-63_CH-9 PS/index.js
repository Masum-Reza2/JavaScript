//provlem 1
// let LoadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve('Script loaded Successfully')
//         }
//         script.onerror = () => {
//             reject('Script get some error!')
//         }
//     })
//         .then((value) => {
//             console.log(value)
//         }, (value) => {
//             console.log(value)
//         })
// }
// let a = LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
// a.then((value)=>{
//     console.log(value)
// },(value)=>{
//     console.log(value)
// })

//provlem 2
// let LoadScript = async (src)=>{
//     try {
//         let mypromise =  new Promise((resolve,reject)=>{
//             let script = document.createElement('script');
//             script.src = src;
//             document.body.appendChild(script);
//             script.onload = () =>{
//                 resolve('SCript loaded successfully');
//             }
//             script.onerror = ()=>{
//                 reject('Script loading Failed');
//             }
//         })
//         let a = await mypromise;
//         console.log(a);
//     } catch (error) {
//         console.log(error)
//     }
// }
// LoadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');

//provlem 3
// let myprom = async () => {
//     try {
//         let a = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('im rejected!')
//             }, 3000);
//         })
    
//         let b = await a;
//         console.log(b)
//     } catch (error) {
//         console.log(error)
//     }
// }
// myprom();

//provlem 4 
let myfunc = async () =>{
    let prom1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('1st')
        }, 2000);
    })
    
    let prom2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('2nd')
        }, 1000);
    })

    let prom3 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('3rd')
        }, 3000);
    })
    
    console.time('awaitALL')
    console.time('run1')
    // let a = await prom1
    let a = prom1
    console.log(a)
    console.timeEnd('run1')
    
    console.time('run2')
    // let b = await prom2
    let b = prom2
    console.log(b)
    console.timeEnd('run2')
    
    console.time('run3')
    // let c = await prom3
    let c = prom3
    console.log(c)
    console.timeEnd('run3')
    
    let Allprom = Promise.all([a,b,c]);
    console.log(Allprom)
    console.timeEnd('awaitALL')
}
myfunc()