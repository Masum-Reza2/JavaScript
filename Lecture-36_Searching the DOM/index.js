//Searching the DOM
let ctitle = document.getElementsByClassName('card-title')[0];
ctitle.style.color = "red";

let ctitle1 = document.getElementById('lala');
ctitle1.style.color = 'blue';

let ctitle2 = document.body.children[0].children[1].children[0];
ctitle2.style.color = 'orange';

let ctitle3 = document.body.firstElementChild.children[1].firstElementChild;
ctitle3.style.color = 'yellow';
//so we can call the required element ById ByCclassname or anyhow no metter just logic should be accurate
let cT = document.querySelectorAll('.card-title');
cT[0].style.color = 'red';
cT[1].style.color = 'blue';
cT[2].style.color = 'green';

document.querySelector('.this').style.color = 'white';
document.querySelector('.this').style.background = 'red';

console.log(document.getElementsByTagName('a'));