'use strict'

let days_span = document.querySelector('#time_days');
let hours_span = document.querySelector('#time_hours');
let minutes_span = document.querySelector('#time_minutes');
let seconds_span = document.querySelector('#time_seconds');

setInterval(()=>{
    let date_feature = new Date('Jan 01 2037 00:00:00');
    let date_now = new Date();
    let Difference = date_feature - date_now;

    let days = Math.floor(Difference / 1000 / 60 / 60 / 24),
    hours = Math.floor(Difference / 1000 / 60 / 60) % 24,
    minutes = Math.floor(Difference / 1000 / 60) % 60,
    seconds = Math.floor(Difference / 1000) % 60;

    if(seconds == 0){
        minutes -= 1;
        seconds = 60;
    }

    if(minutes == 0){
        hours -= 1;
        minutes = 60;
    }

    if(hours == 0){
        days -= 1;
        hours = 60;
    }

    days_span.innerText = days;
    hours_span.innerText = hours;
    minutes_span.innerText = minutes;
    seconds_span.innerText = seconds;
},1000);



