alert(`Here S for Snake, W for Water and G for Gun`);
let userInput = prompt("Enter S,W or G");
let cpuInput = Math.floor(Math.random()*3);
let cpu = ['S','W','G'][cpuInput];

const match = (cpu,userInput) =>{
if(cpu===userInput){
    return 'None match Die'
}
else if(cpu==='S' && userInput==='W'){
    return 'cpu'
}
else if(cpu==='S' && userInput==='G'){
    return 'You'
}
else if(cpu==='W' && userInput==='S'){
    return 'You'
}
else if(cpu==='W' && userInput==='G'){
    return 'cpu'
}
else if(cpu==='G' && userInput==='S'){
    return 'cpu'
}
else if(cpu==='G' && userInput==='W'){
    return 'You'
}
}
let result = match(cpu,userInput);
document.write(`You choose ${userInput} <br> CPU choose ${cpu} <br> The winner is ${result}`); 