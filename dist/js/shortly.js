const link_input=document.getElementById('link-input');
const btn_shorten=document.getElementById('btn-shorten');
const err_msg=document.getElementById('err-msg')
const linkform=document.getElementById('linkform');

linkform.addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    if(link_input.value===""){
        err_msg.innerHTML="Please Input Link";
        link_input.classList.add('border-red')
    }
}

const btn=document.getElementById('menu-btn');
const menu=document.getElementById('menuMobile');
btn.addEventListener('click',navToggle);

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}