
const time = document.querySelector("h1");
const session = document.querySelector("span");
const daysoftheWeek = document.querySelectorAll("li");
const fullDate = document.querySelector("h2");


function currentTime() {

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    const day = date.getDay();
    const currentDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    session.innerText = (hours >= 12) ? " PM" : " AM";

    time.innerText = hours + ":" + minutes + ":" + seconds + " ";
    daysoftheWeek[day].style.color = "#0af0f0";
    fullDate.innerText = monthArray[month] + " " + currentDay + " " + year;
}

currentTime();

setInterval(currentTime, 1000);