const daysText=document.querySelector(".days");
const hoursText=document.querySelector(".hours");
const minsText=document.querySelector(".mins");
const secsText=document.querySelector(".secs");
const countdownContainer = document.querySelector(".countdown-container")

const countdownDate = new Date(2021, 9, 31, 11, 59).getTime();
//countdown svake sekunde

let x = setInterval(function(){
    let now=new Date().getTime();
    let distance=countdownDate-now;

    //dan,sat,minuta,sekunda
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    let mins = Math.floor((distance % (1000*60*60)) / (1000*60));
    let secs = Math.floor ((distance % (1000*60)) / 1000);

    //prikaz countdowna na stranici
    daysText.innerHTML=days;
    hoursText.innerHTML=hours;
    minsText.innerHTML=mins;
    secsText.innerHTML=secs;

    //ako je countdown završio
    if (distance<0){
        clearInterval(x);
        countdownContainer.innerHTML="Expired!"
    }
},1000);
