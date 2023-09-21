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