document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("form").onsubmit = ()=>{send_email();reset();return false;};
})
/*
function send_email(){
    Email.send({

    })
}
*/