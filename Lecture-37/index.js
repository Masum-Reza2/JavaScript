// matches, closest and contains method
// although this is not a good practice
// console.log(id1);
// console.log(id2);
//most of the modern browser will execute it but maybe every browser can never support this

let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
console.log(id1);
console.log(id2);
 
//matches(method)
//limited to each elements attribute. if match within it's attribute true else false
console.log(id1.matches('.box'));
console.log(id2.matches('.box'));
console.log(id1.matches('.kaddu'));
console.log(id2.matches('.tullu'));

//closest(method)
let khamos = document.getElementById('khamos');
console.log(khamos.closest('.box'));
console.log(khamos.closest('#khamos'));

//contains(method) looks like includes()
console.log(id1.contains(khamos));//true
console.log(khamos.contains(id1));//false
console.log(id1.contains(id2)); //false
console.log(id1.contains(id1));//true
