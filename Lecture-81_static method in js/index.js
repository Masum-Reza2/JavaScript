class Myclass{
    constructor(name){
        //similerly we can create more static methods and can apply them
        this.name = Myclass.mecanic(name);
    }

    greet(){
        console.log(`Name of the employee is ${this.name}`)
    }

    //this is how static method create
    static mecanic(name){
        return name[0].toUpperCase()+name.substring(1,name.length)
    }
}

let masum = new Myclass('turi');
masum.greet();