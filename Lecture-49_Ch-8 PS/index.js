//Q1
let div = document.getElementById('writeMe');
div.classList.add('raw')

let btn1 = () => {
    div.innerHTML = 'pow is given to you!'
}
let btn2 = () => {
    div.innerHTML = 'Miw is given to you!'
}
let btn3 = () => {
    div.innerHTML = 'Wow is given to you!'
}

//navigating to google using js
let go = document.getElementById('google');
let myfunc = () => {
    window.location.href = 'https://www.google.com';
};
go.addEventListener('click',myfunc);
// go.onclick = myfunc;

//creating a light effect as my own
let light = document.getElementsByClassName('light')[0];
let lightFunc = () => {
    light.classList.toggle('yellow');
}

let timer1 = setInterval(lightFunc,250);