//NORMAL GETTING REQUEST
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         // console.log(response.status)
//         // console.log(response.ok)
//         // console.log(response.headers)

//         // return response.json()
//         return response.blob()
//     }).then((response) => {
//         console.log(response)
//     })

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method : 'GET',
//     headers : {
//         'Content-Type' : 'application/json'
//     }
// }).then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })

//normal posting request
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'failure is the piller of success',
//         body: 'education is power!',
//         userId: 1,
//     }),
//     headers : {
//         'Content-Type' : 'application/json'
//     }
// }).then((response)=>{
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })


//using async await
// let myfunc = async () => {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     let response = await a.json();
//     console.log(response);
// }
// myfunc();


let myfunc = async () => {
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'failure is the piller of success',
      body: 'education is power!',
      userId: 1,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let response = await p.json();
  console.log(response);
}

myfunc()