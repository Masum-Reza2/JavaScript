//primarilry Global and block scopes

// Global scope 
const a = 'Masum Reza';
{
    console.log(a) // no error cz a is globally available
}
console.log(a)

// Block scope 

{
    let m = 'Massu';
    console.log(m)
}

console.log(m) //error cz m inside block limited
