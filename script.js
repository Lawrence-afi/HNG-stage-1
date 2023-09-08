let day = document.querySelector(".day");
let time = document.querySelector(".time");
let dateOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date();

day.innerHTML = dateOfTheWeek[date.getDay()];

function  displayUTCTime() {
  time.innerText = new Date().toUTCString();
}

setInterval(displayUTCTime,1000);



console.log(date.toUTCString())
