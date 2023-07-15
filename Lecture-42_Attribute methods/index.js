//attribute methods in js 
let first = document.getElementById('first');
//elem.attributes > to get the collection of all attributes
console.log(first.attributes);

//hasAttribute > method to check for existance of an attribute
// console.log(first.hasAttribute('id'));//true
// console.log(first.hasAttribute('class'));//true
// console.log(first.hasAttribute('first'));//false cz not an attribute is a value
// console.log(first.hasAttribute('tullu'));//false cz not an attribute is a value

//getAttribute > used to get the value of an attribute
console.log(first.getAttribute('id')); //print the value of id
console.log(first.getAttribute('class'));  //print the value of class

//setAttribute('name','value') > used to set attribute in element
first.setAttribute('class','khadok dirty illegal');

//removeAttribute > used to remove attribute from the element 
first.removeAttribute('class');

//we can create custom attributes,ES also able to creat and reserve them.so to escape from matching with each other we are to follow this role while creating custom attributes (data-AttributeName = "mario")
// .dataset to access custom attributes
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);