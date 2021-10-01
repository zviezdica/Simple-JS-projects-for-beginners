const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn = document.getElementsByTagName('button')[0];
const color = document.getElementById('color');
//hex boja izgleda npr #f15025
function getRandom(){
    return Math.floor(Math.random()*hex.length);
    }
function getHexColor(){
let hexColor='#';
for (let i=0; i<6; i++){
hexColor += hex[getRandom()];
console.log(hexColor);
}

document.body.style.backgroundColor=hexColor;
color.textContent=hexColor;
}

btn.addEventListener("click", getHexColor);

