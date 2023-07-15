let btn = document.getElementById('btn');
let div = document.getElementById('tarGet');

let myfunc = () => {
    div.innerHTML = 'Hey i\'m inserted by clicking the button <br>';
    div.classList.add('wow')
}

let myfunc2 = () => {
    div.insertAdjacentText('beforeend', 'hey this is the random text and 2nd function on click')
}

// btn.onclick = myfunc;
btn.addEventListener('click', myfunc);
btn.addEventListener('click', myfunc2);

// btn.removeEventListener('click',myfunc2)
// btn.removeEventListener('click',myfunc)

// we can apply if else conditions
// let a = prompt('enter 1 0r 2')
// if(a==1){
//     btn.addEventListener('click', myfunc);
// }
// else{
//     btn.addEventListener('click', myfunc2);
// }