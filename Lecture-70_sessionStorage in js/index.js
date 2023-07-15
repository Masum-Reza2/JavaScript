// sessionStorage used often less than localStorage, Property and method are same as localStorage but ,
// exist only within the current browser tab
// survives page refresh only
// alive only 1 session  

//this is how we can set data in sessionStorage
// sessionStorage.setItem('name', 'masum');
// sessionStorage.setItem('name', 'reza'); //update
// sessionStorage.setItem('age', '22');
// sessionStorage.setItem('home', 'space');
// sessionStorage.setItem('proffesion', 'developer');
// sessionStorage.setItem('salary', '100k');

// //this is how we can get data from sessionStorage
// console.log(sessionStorage.getItem('name'))
// console.log(sessionStorage.getItem('age'))
// console.log(sessionStorage.getItem('home'))

// // getting data using index
// console.log(sessionStorage.key(0))
// console.log(sessionStorage.key(1))
// console.log(sessionStorage.key(2))


//this is how we can remove data from localStorage
// sessionStorage.removeItem('age')
// sessionStorage.removeItem('home')
// sessionStorage.removeItem('phone')
//again 
// sessionStorage.clear()//delete everything

// StorageEvent
//note works in localStorage only
// when the data gets update in local storage in one tab, another tab will be notified.
// that means we can listen the events of their update. 

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}