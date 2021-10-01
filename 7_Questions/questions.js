const btn1=document.getElementsByClassName("btn")[0];
const btn2=document.getElementsByClassName("btn")[1];
const btn3=document.getElementsByClassName("btn")[2];

const a1=document.getElementsByClassName("aHidden")[0];
const a2=document.getElementsByClassName("aHidden")[1];
const a3=document.getElementsByClassName("aHidden")[2];

const i1=document.getElementsByClassName("fa-plus")[0];
const i2=document.getElementsByClassName("fa-plus")[1];
const i3=document.getElementsByClassName("fa-plus")[2];

const inline1=document.getElementsByClassName("inline")[0];
const inline2=document.getElementsByClassName("inline")[1];
const inline3=document.getElementsByClassName("inline")[2];


btn1.addEventListener("click", function(){
    a1.classList.toggle("a");
    i1.classList.toggle("fa-plus");
    i1.classList.toggle("fa-minus");
    inline1.classList.toggle("inline-show");
});

btn2.addEventListener("click", function(){
    a2.classList.toggle("a");
    i2.classList.toggle("fa-plus");
    i2.classList.toggle("fa-minus");
    inline2.classList.toggle("inline-show");
});

btn3.addEventListener("click", function(){
    a3.classList.toggle("a");
    i3.classList.toggle("fa-plus");
    i3.classList.toggle("fa-minus");
    inline3.classList.toggle("inline-show");
});