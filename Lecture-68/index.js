//cookies
console.log('the cookies are ',document.cookie)
document.cookie = 'name=masum'
document.cookie = 'name2=masum2' //cookie is a special system. never overwrite the value when we declere like this but add or update
document.cookie = 'name3=masum3' //like this, it will add this cookie never overwrite the previous
document.cookie = 'name=sopna'  // it will update the previous value bcz match with key.

let key = prompt('enter your key');
let value = prompt('enter your value');
document.cookie = `${encodeURIComponent (key)} = ${encodeURIComponent(value)}` 
//when cookie receive special char it may get puzzle to solve this provlem,recommended to receive key or value in the format of  encodeURIComponent, 
//at latter we can decode this by decodeURIComponent
// decodeURIComponent('adress%3B%3B')
console.log(document.cookie)