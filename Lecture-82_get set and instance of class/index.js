class Human {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }

    talk() {
        console.log(`${this.name} saying that ${this.message}`)
    }

    get getname() {
        return this.name
    }
    get getmsg() {
        return this.message
    }

    set setname(newname) {
        return this.name = newname
    }
}

let masum = new Human('Masum Reza', 'i will be a succesfull wev developer insha Allah very soon');
masum.talk();
console.log(masum.getname);//getting the value of name befoe setting

masum.setname = 'habibullah'; //setting the value of name
console.log(masum.getname); //getting the value of name after setting




// instanceof >> prototypically check if the object belongs/includes with the declered class or not
class Animal extends Human {
    constructor(name) {
        super(name);
    }
    dance() {
        console.log(`${this.name} is dancing!`)
    }
}

let monkey = new Animal('Mankuu');
monkey.dance();
//checking starts here
console.log(masum instanceof Human);
console.log(masum instanceof Animal);
//      ***prototypicaly***         *
console.log(monkey instanceof Animal);
console.log(monkey instanceof Human);