// //this is the basic syntex for fetching data
// // 2 .then used bcz this is a two step operation

// let p = fetch('https://www.boredapi.com/api/activity')

// p.then((response)=>{
//     //before returning the data we can test the following
//     console.log(response.status) 
//     console.log(response.ok)     
//     console.log(response.headers)

//     //we can return the data in various way but remember that we are allow to use only one method!
//     //if we try to use multiple method it will throw error
//     return response.json();
//     // return response.text();
//     // return response.blob();
//     // return response.formData();
//     // return response.arrayBuffer();
// }).then((response)=>{
//     console.log(response)
// })


//practice makes a man perfect
let p = fetch('https://www.boredapi.com/api/activity')
p.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
})