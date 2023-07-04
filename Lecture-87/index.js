//distructuring assignment is used to unpack values from an array or object into distinct variables
//Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays or
// objects into distinct variables.

//Lets dive into the basics

//      *Array destructuring **
// let myarray = [1,2,3]
// let [a,b,c] = myarray;
// console.log(a)
// console.log(b)
// console.log(c)

// You can also ignore specific elements in the array by leaving an empty space or 
//using a comma without assigning a variable.
// let myarray = [1, 2, 3]
// let [a, , c] = myarray;
// console.log(a)
// console.log(c)


//      *Object Destructuring **
// let myobject = { x: 1, y: 2, z: 3 }
// let { x: a, y: b, z: c } = myobject;
// console.log(a)
// console.log(b)
// console.log(c)


// Default Values:
// let myarray = [1];
// let [a, b=2] = myarray;
// console.log(a)
// console.log(b)


// let myobject = {x:1};
// let {x , y=2} = myobject;
// console.log(x)
// console.log(y)

// Rest Syntax:
//The rest syntax (...) allows you to collect the remaining elements of an array or the remaining 
//properties of an object into a new array or object.
// let myarray = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = myarray;
// console.log(a)
// console.log(b)
// console.log(rest)

// let myobject ={ x:1, y:2, z:3,};
// let {x, ...rest} = myobject;
// console.log(x);
// console.log(rest)


// Function Parameters:
// let printValue = ({x,y,z})=>{
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// printValue({x:1,y:2,z:3})

// Similarly, you can destructure an array as function parameters.
// let printValue = ([x, y, z]) => {
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// printValue(['first', 'second', 'third'])


// Spread Operator 
//used to convert an array, string, or object into individual elements
let arr1 = [3, 5, 8];
let obj1 = { ...arr1 }
console.log(obj1)

let sum = (v1, v2, v3) => {
    return v1 + v2 + v3
}
console.log(sum(...arr1))

// Array Spreading

let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];

let combinedNumbers = [...numbers, ...moreNumbers];

console.log(combinedNumbers); 


// Object Spreading
const person = {
    name: 'John',
    age: 30
  };
  
  const additionalInfo = {
    city: 'New York',
    occupation: 'Developer'
};

const mergedPerson = { ...person, ...additionalInfo };

console.log(mergedPerson);

//   String Spreading
const message = 'Hello';
const characters = [...message];
console.log(characters);//most important


let copiedPerson = {...person, name:'masum', age:22}
console.log(copiedPerson);