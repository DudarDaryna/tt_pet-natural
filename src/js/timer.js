function countdown() {
  let offerTime = 2 * 60 * 60;

  const offerHours = Math.floor((offerTime / (60 * 60)) % 24);
  const offerMins = Math.floor((offerTime * 60) % 60);
  const offerSecs = Math.floor(offerTime % 60);

  const hoursEl = document.getElementById('timer');
  hoursEl.innerHTML = `${offerHours} : ${offerMins} : ${offerSecs}`;

  offerTime -= 1;
}

setInterval(countdown, 1000);

const today = new Date();
const orderTime = document.getElementById('orderTime');
orderTime.innerHTML = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;

// function getTimeRemaining(endtime) {
//   const total = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

//   return {
//     total,
//     hours,
//     minutes,
//     seconds,
//   };
// }

// function initializeClock(id, endtime) {
//   const clock = document.getElementById('timer');
//   const hoursSpan = clock.querySelector('.hours');
//   const minutesSpan = clock.querySelector('.minutes');
//   const secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     hoursSpan.innerHTML = (t.hours).slice(-2);
//     minutesSpan.innerHTML = (t.minutes).slice(-2);
//     secondsSpan.innerHTML = (t.seconds).slice(-2);

//     const timeinterval = setInterval(updateClock, 1000);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
// }

// const deadline = new Date(Date.parse(new Date()) + 2 * 60 * 60 * 1000);
// initializeClock('timer', deadline);
