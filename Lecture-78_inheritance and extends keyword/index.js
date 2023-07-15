//In JavaScript, when a class extends another class using the extends keyword,
//it establishes a prototypal inheritance relationship between the two classes.

class Animal{
    constructor(name){
        this.name = name;
    }

    sing(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} is singing! <br>`)
    }

    cry(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} is crying! <br>`)
    }

    dance(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} is Dancing! <br>`)
    }
}

class AllMonkey extends Animal{
    constructor(name,climb, food,flirt){
        super(name);  //important calling the constructor from itm mother
        this.climb = climb;
        this.food = food;
        this.flirt = flirt;
    }

    eat(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} eating ${this.food}! <br>`)
    }

    ride(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} climbing the ${this.climb}! <br>`)
    }

    noti(){
        document.body.insertAdjacentHTML('beforeend',`${this.name} flirting with ${this.flirt}! <br>`)
    }
}

let mrWaggor = new Animal('Mr-Waggor')
mrWaggor.sing()
mrWaggor.cry()
mrWaggor.dance()
document.body.insertAdjacentHTML('beforeend',`2nd skill <br>`)
let monkey1 = new AllMonkey('Mankuu','Apple tree', 'Banana', 'Chameli')
monkey1.eat()
monkey1.ride()
monkey1.noti()
monkey1.sing()
monkey1.cry()
monkey1.dance()