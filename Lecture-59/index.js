async function harry() {

    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('27 deg')
        }, 2000);
    })

    let BangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('25 deg')
        }, 4000);
    })

    // DelhiWeather.then(console.log)
    // BangaloreWeather.then(console.log)

    console.log('waiting for DelhiW...')
    let DelhiW = await DelhiWeather
    console.log('delhiW is ', DelhiW)
    console.log('waiting for BangalW...')
    let bangalW = await BangaloreWeather
    console.log('BangalW is ', bangalW)
    return [DelhiW, bangalW]

}
console.log('welcome to weather control room')

// let a = harry();

let cherry = async () => {
    console.log('hey im another async function')
}
// cherry();

let main1 = async () => {
    func2 = await cherry()
    func1 = await harry()
}
main1()


//practice makes a man perfect
//practice makes a man perfect

// //async await explaination
// let myfunc = async () =>{
//     return('Hello dear')
// }
// // myfunc().then(alert)
// // myfunc().then(console.log)


// let myfunc = async () => {
//     let DelhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('27 Deg C im 1st ')
//         }, 2000)
//     })

//     let BangloreWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('25 Deg C im 2nd')
//         }, 4000)
//     })

//     let RajestanWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('21 Deg C im 3rd')
//         }, 6000)
//     })

//     // DelhiWeather.then(console.log)
//     // BangloreWeather.then(alert)
//     // RajestanWeather.then(console.log)

//     console.log('waiting...')
//     let RajestanW = await RajestanWeather;
//     console.log(RajestanW);
//     console.log('waiting...')
//     let DelhiW = await DelhiWeather;
//     console.log(DelhiW)
//     console.log('waiting...')
//     let BangloreW = await BangloreWeather;
//     console.log(BangloreW)




// }
// // myfunc()


// let myfunc2 = async () => {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('im 1st promise')
//         }, 2000);
//     })


//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('im 2nd promise')
//         }, 4000);
//     })

//     let p3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('im 3rd promise')
//         }, 6000);
//     })


//     let b = await p2
//     console.log(b)
//     let c = await p3
//     console.log(c)
//     let a = await p1
//     console.log(a)

// }
// // myfunc2()

// let myfunc3 = async () => {
//     let b = await myfunc2()
//     let a = await myfunc()
// }
// myfunc3()