const container=document.getElementById('container');

const colors=['#e74c3c','#8e44ad','#3498d','#e67e22','#2ecc71' ,'#FCA5A5',
'#F87171','#EF4444','#DC2626','#B91C1C','#991B1B','#7F1D1D',
'#FBCFE8','#F9A8D4','#F472B6','#EC4899','#DB2777','#BE185D','#9D174D','#831843',
'#A7F3D0','#6EE7B7','#34D399','#10B981','#059669','#047857'
,'#065F46','#064E3B','#DDD6FE'
,'#C4B5FD'
,'#A78BFA'
,'#8B5CF6'
,'#7C3AED'
,'#6D28D9'
,'#5B21B6'
,'#4C1D95'



];


const SQUARES=1500;



for (let i = 0; i < SQUARES; i++) {
    const square=document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setColor(square));
    square.addEventListener('mouseout',()=>removeColor(square));
    container.appendChild(square);
    
}


function setColor(element){
    const color=getRandomColo();
    element.style.background=color;
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}


function removeColor(element){
    element.style.background='#1d1d1d';
    element.style.boxShadow='0 0 2px #000'
    
}


function getRandomColo(){
    return colors[Math.floor(Math.random()*colors.length)]
}