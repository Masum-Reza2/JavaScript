let myButton = () => {
    let button = document.getElementsByTagName('button');
    let myarray = Array.from(button);
    myarray.forEach(element=>{
        element.classList.toggle('dark')
    })
}
let timer1 = setInterval(myButton,400);

let wait1 = () =>{
    let waiting = document.getElementsByClassName('waiting')[0];
    waiting.innerHTML = 'Thank\'s for clicking the first button!'
}
let wait2 = () =>{
    let waiting = document.getElementsByClassName('waiting')[0];
    waiting.innerHTML = ' OMG ! Thank\'s for clicking the 2nd button!'
}
let wait3 = () =>{
    let waiting = document.getElementsByClassName('waiting')[0];
    waiting.innerHTML = 'WOW!  Thank\'s for clicking the 3rd button!'
}
let wait4 = () =>{
    let waiting = document.getElementsByClassName('waiting')[0];
    waiting.innerHTML = 'OH YES! Thank\'s for clicking the 4th button!'
}
let wait5 = () =>{
    let waiting = document.getElementsByClassName('waiting')[0];
    waiting.innerHTML = 'OH YAAA! Thank\'s for clicking the 5th button!'
}

//digital clock 
let clockFunc = () =>{
    let clock = document.getElementsByClassName('clock')[0];
    clock.innerHTML = new Date().toLocaleTimeString();
};
let timer2 = setInterval(clockFunc,1000)

//autoText
let autoText = document.getElementsByClassName('autoText')[0];
let textFunc1 = () => {
    autoText.innerHTML = 'Always remember that...'
}
let textFunc2 = () => {
    autoText.innerHTML = 'Time and Tide wait for none'
}
let textFunc3 = () => {
    autoText.innerHTML = 'Hey Dear! Welcome to the world of coding'
}
let textFunc4 = () => {
    autoText.innerHTML = 'Let\'s code your career!'
}

let autofunc =()=>{
    let text1 = setTimeout(textFunc1,1000);
    let text2 = setTimeout(textFunc2,2000);
    let text3 = setTimeout(textFunc3,3000);
    let text4 = setTimeout(textFunc4,4000);
}
autofunc();
let autotimer = setInterval(autofunc,4000)