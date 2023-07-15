// In JavaScript, a closure is created when a function is defined inside another function and it has access to variables and parameters of its outer (enclosing) function, even after the outer function has finished executing.
let message = 'Good Morning from globally scope';
function hello1 (){
    let message = 'Good Morning from block scope';
    {
        let message = 'Good morning from block inside block'
        console.log('Hello1 ' + message);
    }
    let c = function hello2(){
        console.log('im from c ' + message)
    }
    return c()
}

 hello1();
//  note >> This process of searching for variables from the innermost scope to the outermost scope based on their placement in the source code is called lexical scoping.

function OuterFunction (){
    let message = 'hello world';
    function innerfunction () {
        console.log(message)
    }
    return innerfunction;
}
let a = OuterFunction();
a();

// The ability of the inner function to access variables from its parent function and beyond is known as closures.
function myfunc (){
    let message = 'this is a message';
     function greet(){
        console.log(message) //this is called closures cz using the variable of it's parent function and so on
     }

     return greet()
}
myfunc();


function createcounter (){
    let count = 0;

    function increement (){
        count++;
        console.log(count)
    }

    function decreement (){
        count--;
        console.log(count)
    }
    return{
        increement: increement,
        decreement: decreement
    }
}

let counter = createcounter();
counter.increement()
counter.increement()
counter.increement()
counter.decreement()


// practice makes a man perfect 
let func1 = ()=>{
    let message = 'hello world 1';
    let inner1 =()=>{
        console.log(message)
    }
    return inner1()
}
func1()