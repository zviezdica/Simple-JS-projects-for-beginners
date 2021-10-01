const reviews = [
{
    id:1,
    name: "Ana Antina",
    job: "WEB DEVELOPER",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg/180px-Jessica_Ennis_%28May_2010%29_cropped.jpg",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    id:2,
    name: "Iva Jurina",
    job: "WEB DESIGNER",
    img: "https://cdn.pixabay.com/photo/2018/10/01/22/05/woman-3717437_960_720.jpg",
    text: "It has survived not only five centuries, remaining essentially unchanged."+
    " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.", 
},
{
    id:3,
    name: "Lela Đopina",
    job: "INTERN",
    img: "https://images6.fanpop.com/image/photos/43600000/Ebony-Woman-ebony-people-43671989-799-1200.jpg",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    id:4,
    name: "Tea Nelina",
    job: "MISICA",
    img: "https://cdn.pixabay.com/photo/2018/10/01/22/05/woman-3717437_960_720.jpg",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"+
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}
];
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("random");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//nextBtn
nextBtn.addEventListener("click", function(){
    if (currentItem<3){
    currentItem++;
    }   
    else{
        currentItem=0;
    }
    showPerson(currentItem);
});

//prevBtn
prevBtn.addEventListener("click", function(){
    if (currentItem>0) {
        currentItem--;
    }
    else {
        currentItem=3;
    }
    showPerson(currentItem);
});

//randomBtn
randomBtn.addEventListener("click", function(){
    currentItem= (Math.floor(Math.random()*reviews.length));
    showPerson(currentItem);
})