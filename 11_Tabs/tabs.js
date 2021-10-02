const articles=[
    {
        title: "History",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" + 
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" + 
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"
    },
    {
        title: "Vision",
        text: " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" + 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" + 
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"
    },
    {
        title: "Goals",
        text: " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
        " Impedit repellendus blanditiis, quia molestias, culpa eaque ea quidem expedita" + 
        " repellat officiis corrupti dolores, eum vel sequi nesciunt delectus temporibus. Quam, error?"
    },

];


//kreiranje buttona
const textBtnContainer=document.querySelector(".text-btn-container");
let textBtns = articles.map(function(article){
    return `<button class="text-btn" data-id="${article.title}">${article.title}</button>`
})
textBtns=textBtns.join();
textBtns=textBtns.replace(/,/g,"");
textBtnContainer.innerHTML=textBtns;

//kreiranje articlea i promjena boje buttona
let btns=document.querySelectorAll(".text-btn");
let pContainer=document.querySelector(".p-container");


    textBtnContainer.addEventListener("click", function(e){
    btns.forEach(function(btn){
            btn.style.backgroundColor="rgb(212, 211, 211)";   
            if(btn.dataset.id==e.target.dataset.id){
                btn.style.backgroundColor="rgba(255, 255, 255, 0.1)";
            }
        })
    articles.forEach(function(article){
        if (e.target.dataset.id==article.title){
            pContainer.innerHTML= `<div class="${article.title}-text">
            <h2>${article.title}</h2>
            <p>${article.text}</p>`;
        
        }
    })  
    
}

)


