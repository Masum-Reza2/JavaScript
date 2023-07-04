// let SayHello = (name) => console.log('hello world ' + name)
// let SayHello = name => console.log('hello world ' + name)
// let SayHello = (name, greeting) => console.log(greeting + ' ' + name)
// SayHello('Masum', 'Good morning');

// let x = {
//     name: 'masum',
//     role: 'JS developer',
//     xp: '6 months',
//     show: function () {

//         console.log(this) //here this is object
//         console.log(`the name is ${this.name}, role is ${this.role} and experience is ${this.xp}`);
//         let that = this;
        
//         setTimeout(function () {
//             console.log(this) // but here this is window
//             console.log(`the name is ${that.name}, role is ${that.role} and experience is ${that.xp}`);
//         }, 2000);
//         //note : we will never face this problem in the arrow function cz arrow function use lexical scope and figure out the parent 'this';
//     }
// }

// console.log(x.name,x.role)
// x.show();


// practice makes a man perfect 
let y = {
    name : 'Khalil',
    role : 'Python developer',
    xp : '10 Years',

    showagain : function (){
        console.log(`the name is ${this.name} role is ${this.role} and experience is ${this.xp}`);
        let that = this;
        setTimeout(function (){
            console.log(`name is ${that.name} role is ${that.role} and experience is ${that.xp}`)
        }, 2000);
        setTimeout(()=>{
            console.log(`name is ${this.name} role is ${this.role} and experience is ${this.xp}`)
        }, 2000);
    }
}
y.showagain()