const ham=document.getElementById('ham');
const menu=document.getElementById("menu");
const close=document.getElementById("close");
const list=document.getElementById("list");
const circular=document.getElementById("circletext");
   
ham.addEventListener('click',()=>{
    if(menu.classList.contains('block')){
        menu.classList.replace('block','hidden');
        close.classList.replace('hidden','block');
        list.classList.replace('hidden','flex');
        } else{
            menu.classList.replace('hidden','block');
            close.classList.replace('block','hidden');
            list.classList.replace('flex','hidden');
        }       
})

function circularText(){
    const data=["F","R","O","N","T","E","N","D"," ","D","E","V","E","L","O","P","E","R"," ","-","-"," "," ","M","O","H","A","M","M","E","D"," ","A","Q","I","B"," ","-","-"];
    
       circular.innerHTML=(data.map((text,i) => `<span style="transform: rotate(${i*9}deg);">${text}</span>`)).join(" ");
}

circularText();
