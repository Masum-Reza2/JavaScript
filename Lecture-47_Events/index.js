let btn2 = document.getElementsByClassName('btn2');

let myclick = () => {
    console.log('button2 clicked');
    btn2[0].style.color = btn2[0].classList.toggle('yellow')
};