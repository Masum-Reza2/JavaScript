//localStorage is a url storage object which are not sent to server with each request like cookie.
//This data survive a full page refresh or even a full browser restart

//this is how we can set data in localStorage
localStorage.setItem('name','masum');
localStorage.setItem('name','reza'); //update
localStorage.setItem('age','22');
localStorage.setItem('home','sylhet');
localStorage.setItem('district','moulvibazar');
localStorage.setItem('village','kalenga');
localStorage.setItem('phone','01765334346');

//this is how we can get data from localStorage
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('home'))
// getting data using index
console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))
console.log(localStorage.getItem(localStorage.key(3)))

//this is how we can remove data from localStorage
// localStorage.removeItem('age')
// localStorage.removeItem('home')
// localStorage.removeItem('phone')
//again 
// localStorage.clear()//delete everything

//creativity
let key = prompt('enter the name of key');
let value = prompt('enter the name of value');

localStorage.setItem(key,value)

console.log(`the value of ${key} is ${value}`)

if(key=='red' || key=='blue'){
    localStorage.removeItem(key)
}


//important
window.onstorage= (e) =>{
    alert('Updated')
}