let main = document.getElementsByClassName('main');
for (const element of main) {
    let blinker = ()=>{
        element.classList.toggle('blink')
    }
    setInterval(blinker,800)
}

let paralel = document.getElementsByClassName('paralel');
for (const element of paralel) {
    let blinker = ()=>{
        element.classList.toggle('blink')
    }
    setInterval(blinker,600)
}


const text = [
    'Initializing Hacking program...',
    'Trying to hack Facebook...',
    'Username Found Md gnrl ****...',
    'Getting Password...',
    'Attempts 200k time but failed. Trying Again...',
    'Another 200k Attempts Done...',
    'found id Md Gnrl Moin...',
    'Hacking E-mail address...',
    'Found E-mail ahemdmoin3200@gmail.com...',
    'Trying to Hack the Password',
    'Password Hacked!...',
    'the Password is *********',
    'Sent all information to Database...',
    'Broom we are Done!...'
  ];
  

//   async IIFE we can print the element of an array every after a particuler time
  (async () => {
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Delay of 1 second
  
      console.log(text[i]);
      hacker.innerHTML = text[i]
    }
  })();
  