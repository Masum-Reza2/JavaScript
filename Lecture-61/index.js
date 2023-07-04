// error objects 
// try {
//     // harry
//     // throw new ReferenceError('Harry is not good')
//     // throw new EvalError('Harry is not good')
//     // throw new TypeError('Harry is not good')
//     // throw new RangeError('Harry is not good')
//     // throw new SyntaxError('Harry is not good')
//     // throw new reportError('Harry is not good')
//     // throw new MediaError('Harry is not good')
//     throw new ReferenceError('Harry is not good')
// } catch (error) {
//     console.log(error)
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

//throwing custom errors
try {
    let age = prompt('Enter your valid age!');
    age = Number.parseInt(age);
    if(age>150){
        throw new ReferenceError('Invalid age');
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    document.write(error.message)
};

console.log ('the programm is still running!')