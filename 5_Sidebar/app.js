const closeBtn = document.querySelector(".close-btn");
const toggleBar = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector("aside");

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});

toggleBar.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});