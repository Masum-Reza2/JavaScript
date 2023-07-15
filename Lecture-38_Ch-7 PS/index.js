//Q1
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red';
// Q2
//Q3
document.getElementsByTagName('nav')[0].children[1].style.color = 'green';
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green';

//Q4
let li = document.getElementsByTagName('nav')[0].children;
let cng_BG = Array.from(li); //convert them into array forEach is suitable loop 
cng_BG.forEach(element => {
    element.style.background = 'cyan'
});