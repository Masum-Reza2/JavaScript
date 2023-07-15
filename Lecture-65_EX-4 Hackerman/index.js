let HackerMan = async () => {

    let text1 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'Initializing Hack program...')
                // reject()
            }, 2000)
        })
    }

    let text2 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'Hacking Taqbir\'s Username...')
                // reject(new Error('We are facing some errors'))
            }, 2000)
        })
    }

    let text3 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'Username found Taqbir Islam...')
            }, 2000)
        })
    }

    let text4 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'Connecting to Facebook...')
            }, 2000)
        })
    }

    let text5 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'Hacking completed Data of Taqbir Islam stored in Database...')
            }, 2000)
        })
    }

    let text6 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(document.body.innerHTML = 'We are done!...')
            }, 2000)
        })
    }
    console.time('run')
    let a = await text1()
    // let a = text1()
    console.log(a)

    let b = await text2()
    // let b = text2()
    console.log(b)

    let c = await text3()
    // let c = text3()
    console.log(c)

    let d = await text4()
    // let d = text4()
    console.log(d)

    let e = await text5()
    // let e = text5()
    console.log(e)

    let f = await text6()
    // let f = text6()
    console.log(f)
    console.timeEnd('run')
    let AllP = await Promise.allSettled([a, b, c, d, e, f]);
}

HackerMan()