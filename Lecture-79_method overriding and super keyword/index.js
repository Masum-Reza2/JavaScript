class Employee{
    login(){
        console.log(`Employee has logged in`)
    }

    logout(){
        console.log(`Employee has logged out`)
    }

    RequestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    requestCoffee(){
        console.log(`Employee has requested ${x} coffee's`)
    }

    //this is how method override
    RequestLeaves(leaves){
        // console.log(`Employee has requested ${leaves+1} leaves (one bonus)`) //wrong approach
        super.RequestLeaves(leaves+1)
        console.log(`one bonus granted`)
    }
}

let masum = new Programmer();
masum.login();
masum.RequestLeaves(3)