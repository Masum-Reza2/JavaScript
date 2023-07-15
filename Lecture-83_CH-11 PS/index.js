class Human {
    constructor(name, age, mobile) {
        this.name = Human.mecanism(name);
        this.age = age;
        this.mobile = mobile;
    }

    preview() {
        console.log(`Name of the employee is ${this.name},\n ${this.name} is ${this.age} years old.\n Contact ${this.name} at ${this.mobile}`)
    }

    static mecanism(name) {
        return name[0].toUpperCase() + name.substr(1, name.length) //first letter of name should be capital.
    }

    get getname(){
        return this.name;
    }

    set setname(newname){
        this.name = newname;
    }
}

let rabbi = new Human('rabbi', 17, '01827263543');
rabbi.preview();

class nextversion extends Human {
    constructor(name, age, mobile) {
        super(name, age, mobile)
    }

    birthYear() {
        let currentYear = new Date().getFullYear();
        let born = currentYear - this.age;
        return console.log(`${this.name} was born in ${born} and this is additional info then prev.`)
    }

    preview() {
        super.preview() + this.birthYear();
    }
}

let masun = new nextversion('masum', 22, '01786546372');
masun.preview()

console.log(rabbi instanceof Human)
console.log(rabbi instanceof nextversion)
console.log(masun instanceof nextversion)
console.log(masun instanceof Human)


masun.setname = 'tiger';
rabbi.setname = 'liger';

console.log(masun.getname)
console.log(rabbi.getname)