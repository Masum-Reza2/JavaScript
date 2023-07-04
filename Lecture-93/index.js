let passGen = (mylength)=>{
    let charset = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for(let i=0; i<mylength; i++){
        let Ran_Index = Math.floor(Math.random()*charset.length);
        password += charset.charAt(Ran_Index);
    }
    return password;
}


let myfunc = ()=>{
    let show = document.getElementById('show');
    let digit = document.getElementById('Digit');
    mylength = digit.value;
    mylength = Number.parseInt(mylength);

    if(mylength){
        show.innerHTML = passGen(mylength);
        digit.value = '';
    }
    else{
        show.innerHTML = 'Pease Enter a digit';
    }
}