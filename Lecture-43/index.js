let container = document.getElementById('container');
container.innerHTML = container.innerHTML + 'hello dynamic world';

let p = document.createElement('p');
p.innerHTML = '<b>hey this is newly created paragraph</b>';

container.appendChild(p);    //it makes p as the lastElementChild of container
container.append(p);         //it makes p as the lastElementChild of container
container.prepend(p);        //it makes p as the firstElementChild of container
container.before(p)          //it makes p as the previousElementSibling
container.after(p);          //it makes p as the nextElementSibling of container
container.replaceWith(p);       //it replace the whole container with p
