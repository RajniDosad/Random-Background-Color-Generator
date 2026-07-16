//
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

    }
    document.body.style.color="white";
    document.querySelector('h1').innerHTML="Changing Background color randomly"
   document.body.style.backgroundColor=color;
}

let change;

document.querySelector("#start").
addEventListener('click',function(){
    if(!change){
    change=setInterval(randomColor,500);}
    })
    document.querySelector("#stop").
addEventListener('click',function(){
    clearInterval(change);
    change=null;
    console.log(change)
    })
    
