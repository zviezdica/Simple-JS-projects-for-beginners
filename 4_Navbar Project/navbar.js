const toggle = document.querySelector(".toggle-bar")
const links = document.querySelector(".links");

toggle.addEventListener("click", function(){
    links.classList.toggle("links-hidden");
});