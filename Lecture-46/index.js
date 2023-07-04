// setTimeout and setInterval in js 
// >>setTimeout
// The basic syntax for setTimeout is: setTimeout(function, delay);

// let first = () => document.body.innerHTML = 'Hello-world';
// let second = () => document.body.innerHTML = 'This is Masum Reza and ';
// let third = () => document.body.innerHTML = 'Welcome to the world of coding...';
// let fourth = () => document.body.innerHTML = 'here you can';
// let fifth = () => document.body.innerHTML = 'Master web development';

// let timer1 = setTimeout(first, 2000);
// let timer2 = setTimeout(second, 4000);
// let timer3 = setTimeout(third, 6000);
// let timer4 = setTimeout(fourth, 8000);
// let timer5 = setTimeout(fifth, 10000);
// clearTimeout(timer1);
// clearTimeout(timer2);
// clearTimeout(timer3);
// clearTimeout(timer4);
// clearTimeout(timer5);


//let's have some creative look at setInterval
// let RePeat = () => {
//     let timer1 = setTimeout(first, 2000);
//     let timer2 = setTimeout(second, 4000);
//     let timer3 = setTimeout(third, 6000);
//     let timer4 = setTimeout(fourth, 8000);
//     let timer5 = setTimeout(fifth, 10000);
// }
// let intersence = setInterval(RePeat, 10000);
// clearInterval(intersence);

//creativity 
let first = document.getElementById('first');

        let myfunc = () => {
            first.classList.toggle('red');
        }
        let timer1 = setInterval(myfunc, 500);
        let timoff = () => clearInterval(timer1);
        
        let tullu = document.getElementById('tullu');
        tullu.classList.add('wow')

        let second = () => tullu.innerHTML = 'Hello world..';
        let third = () => tullu.innerHTML = 'This is Masum Reza';
        let fourth = () => tullu.innerHTML = 'Welcome! to the world of coding...'
        let fifth = () => tullu.innerHTML = 'Let\'s code your career!'

        // first.nextElementSibling.className.add('wow');
        let rEpEAt = () => {
            let timer2 = setTimeout(second, 1000);
            let timer3 = setTimeout(third, 3000);
            let timer4 = setTimeout(fourth, 5000);
            let timer5 = setTimeout(fifth, 7000);
        }