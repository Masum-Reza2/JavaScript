let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let amORpm = document.getElementById('amORpm');


let mytimer = setInterval(() => {
  hour.innerHTML = new Date().getHours();
  minutes.innerHTML = new Date().getMinutes();
  seconds.innerHTML = new Date().getSeconds();
  seconds.classList.toggle('dark')
  amORpm.innerHTML = new Date().toLocaleString().match(/am|pm/i)[0];
}, 1000);





function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/t-rex-roar.mp3');
  audio.play();
}


const setAlarm = (number) => {
  number = document.getElementById('lelo').value;
  setTimeout(() => {
    play();
  }, number * 1000);

  let mytimer = setInterval(() => {
    start.innerHTML = `Alarm starts in ${number -= 1} seconds`;
    if (number === 0) {
      clearInterval(mytimer);
      start.innerHTML = `Alarm started`;
    }
  }, 1000);
};