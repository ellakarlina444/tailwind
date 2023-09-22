console.log("index.js")
import "./style.css"


const btn=document.getElementById('menu-loopstudio');
const menu=document.getElementById('menu');
btn.addEventListener('click',navToggle);

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}