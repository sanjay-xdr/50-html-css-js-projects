const button=document.getElementById('button')
const toasts=document.getElementById('toast')



button.addEventListener('click',()=>{
    createNotification()
})


function createNotification(){
    const notif=document.createElement('div');
    notif.classList.add('toast');
    notif.innerText="lLorem, ipsum dolor.";
    toasts.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    },5000)
}