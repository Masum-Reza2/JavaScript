//it is a chain of object
//if a command not found in its object then it will search it inside its proto and so on.
let a = {
    run:()=>{
        alert('im alerting you.')
    }
}

let b = {
    name : 'Masum'
}

let c = {
    profession : 'Developer'
}

let d = {
    age : 22
}

a.__proto__ = b;
b.__proto__ = c;
c.__proto__ = d;