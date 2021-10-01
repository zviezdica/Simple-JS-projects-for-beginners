const num = document.getElementsByClassName("number")[0];
const btn1 = document.getElementsByTagName("button")[0];
const btn2 = document.getElementsByTagName("button")[1];
const btn3 = document.getElementsByTagName("button")[2];
const btns = document.querySelectorAll("button");

//povećavanje za 1
let i =0;
function increase(){
    i++;
    num.textContent=i;       
}
btn3.addEventListener("click", increase);

//smanjivanje za 1
function decrease(){
    i--;
    num.textContent=i;        
}
btn1.addEventListener("click", decrease);

//resetiranje na 0
function reset(){
    i=0;
    num.textContent=i;
}
btn2.addEventListener("click", reset);

//funcija za promjenu boje
function colorChange(){
    if (i<0){
    num.style.color = "red";
    }
    else if(i>0){
    num.style.color = "green";   
    }
    else {
    num.style.color = "black";      
    }
}
btn1.addEventListener("click", colorChange);
btn2.addEventListener("click", colorChange);
btn3.addEventListener("click", colorChange);
