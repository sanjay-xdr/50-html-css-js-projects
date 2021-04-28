const panels = document.querySelectorAll(".panel");

panels.forEach((panels)=>{
    panels.addEventListener("click",()=>{
        removeactiveclass();
        panels.classList.add('active')
    })
})

function removeactiveclass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}