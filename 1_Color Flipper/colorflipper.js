const boje = ['pink', 'green', 'blue', '#F15025', 'yellow'];
const btn = document.getElementsByTagName('button')[0];
const btn2 = document.getElementsByTagName('button')[1];

//funkcija za promjenu boje po redu
let i=0;
function poRedu(){ 
    document.body.style.backgroundColor=boje[i];
    document.getElementById('color').textContent=boje[i];
    while(i<boje.length-1){
    i++;
    return i;
} 
}
//funkcija za dobivanje random boje
function getRandomNumber(){
function broj(){
    return Math.floor(Math.random()*boje.length);  
}
const randomNumber=broj();
document.body.style.backgroundColor= boje[randomNumber];
document.getElementById('color').textContent=boje[randomNumber];
}


btn.addEventListener("click", poRedu);
btn2.addEventListener("click", getRandomNumber);
