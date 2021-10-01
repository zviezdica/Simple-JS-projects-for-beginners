const btn = document.querySelector(".btn");
const newWindow = document.querySelector(".newWindow");
const closeBtn = document.querySelector(".removeClose");

btn.addEventListener("click", function(){
    newWindow.classList.remove("newWindow");
    newWindow.classList.add("openedNewWindow");
    closeBtn.classList.add("close");
});

closeBtn.addEventListener("click", function(){
    newWindow.classList.remove("openedNewWindow");
    closeBtn.classList.remove("close");
    closeBtn.classList.add("removeClose");
    newWindow.classList.add("newWindow");
});