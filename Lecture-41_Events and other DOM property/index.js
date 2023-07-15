let span = document.body.firstElementChild;
console.log(span);
console.dir(span);//console.dir gives the element as an object with it's properties

// tagName/nodeName
// used to read the name of an element
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstChild.tagName);//undefined cz tagName is only valid for element property but nodeName is valid for all(cmt.txt tag etc)
console.log(document.body.firstElementChild.tagName);

//innerHTML and outerHTML
let first = document.getElementById('first');
console.log(first.innerHTML);//getting the innerHTML

first.innerHTML = 'as you tuned with us now look at this we changed them, is\'t it interesting ?';
//setting the innerHTML as my wishes
console.log(first.innerHTML);
//innerHTML is valid for only element nodes we can't access on cmt or txt by it,
//to access cmts or txt etc >>>
let Acs = document.body.firstChild.data;
let asc = document.body.firstChild.nodeValue;
console.log(Acs);
console.log(asc); //we can access the comments or text etc by( .data and .nodeValue);

// textContent
// we can print the entire textcontent of any element >> path.textcontent
console.log(document.body.textContent);
console.log(document.body.firstChild.textContent);

//hidden property
let third = document.getElementById('third');
third.hidden = false; //or true
// $0.hidden = false;