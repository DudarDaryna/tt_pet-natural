const hoursEl = document.getElementById('timer');
let offerTime = 2 * 60 * 60;

function countdown() {
  const offerHours = Math.floor((offerTime / (60 * 60)) % 24);
  let offerMins = Math.floor((offerTime / 60) % 60);
  let offerSecs = Math.floor(offerTime % 60);

  if (offerMins < 10) {
    offerMins = `0${offerMins}`;
  }

  if (offerSecs < 10) {
    offerSecs = `0${offerSecs}`;
  }

  hoursEl.innerHTML = `${offerHours} : ${offerMins} : ${offerSecs}`;

  offerTime -= 1;

  if (offerTime === 0) {
    offerTime = 0;
  }
}

setInterval(countdown, 1000);

const today = new Date();
const orderTime = document.getElementById('orderTime');
orderTime.innerHTML = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
