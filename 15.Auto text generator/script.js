const textEl=document.getElementById('text')
const speedel=document.getElementById('speed')



const text="Hey there Hope you are doing great";

let idx=1;
let speed=300/speedel.value;



WriteText()


function WriteText(){
    textEl.innerText=text.slice(0,idx)

    idx++;


    if(idx>text.length)
    idx=1;


setTimeout(WriteText,speed)
}


speedel.addEventListener('input',(e)=>{
    speed=300/e.target.value;

})

