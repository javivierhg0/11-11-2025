
const btnPlaneta = document.getElementById("btnPlaneta2")
const btnEstrella2 = document.getElementById("btnEstrella2"); 
const cielo2 = document.getElementById("cielo2");
const inputEmoji = document.getElementById("inputEmoji");
const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnEstrella2.addEventListener("click", ()=> {
    cielo2.innerHTML += "⭐";
})

//DOBLE CLICK 
btnPlaneta.addEventListener("dblclick", ()=>{
    cielo2.innerHTML += "🪐";
})

//AGREGA UN EMOJI
btnAgregarEmoji.addEventListener("click", ()=>{
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo2.innerHTML += emoji;
    inputEmoji.value="";
})

//BORRAR LOS EMOJIS
inputEmoji.addEventListener("keydown", e =>{
    if(e.key==="Escape") cielo2.innerHTML="";
})