let container = document.getElementById('container');

container.insertAdjacentHTML('afterbegin','<p class="first">hopefully firstElementChild of container</p>');
container.insertAdjacentHTML('beforeend','<p class="second">hopefully lastElementChild of container</p>');
container.insertAdjacentHTML('beforebegin','<p class="third">hopefully previousSibling of container</p>');
container.insertAdjacentHTML('afterend','<p class="fourth">hopefully nextSibling of container</p>');

//afterbegin > will make the inserted html as the firstElementChild
//beforeend > will make the inserted html as the lastElementChild
//beforebegin > will make the inserted html as the previousSibling
//afterend > will make the inserted html as the nextSibling

//let's discuss about node removal
let first = document.getElementsByClassName('first');
let second = document.getElementsByClassName('second');
let third = document.getElementsByClassName('third');
let fourth = document.getElementsByClassName('fourth');

// first.remove();
// first[0].remove();
// second[0].remove();
// third[0].remove();
// fourth[0].remove();