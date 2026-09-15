const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

menuBtn.addEventListener("click",()=>menu.classList.toggle("active"));

document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",()=>menu.classList.remove("active"));
});

const breathingBtn=document.getElementById("breathingBtn");
const breathingCircle=document.getElementById("breathingCircle");
const breathingText=document.getElementById("breathingText");

let breathingRunning=false;
let breathingTimeout;

function breathingCycle(){
    if(!breathingRunning)return;

    breathingText.textContent="Inspire...";
    breathingCircle.classList.remove("exhale");
    breathingCircle.classList.add("inhale");

    breathingTimeout=setTimeout(()=>{
        if(!breathingRunning)return;
        breathingText.textContent="Segure...";

        breathingTimeout=setTimeout(()=>{
            if(!breathingRunning)return;
            breathingText.textContent="Expire...";
            breathingCircle.classList.remove("inhale");
            breathingCircle.classList.add("exhale");

            breathingTimeout=setTimeout(()=>breathingCycle(),4000);
        },2000);
    },4000);
}

breathingBtn.addEventListener("click",()=>{
    breathingRunning=!breathingRunning;

    if(breathingRunning){
        breathingBtn.textContent="Parar exercício";
        breathingCycle();
    }else{
        clearTimeout(breathingTimeout);
        breathingText.textContent="Pronto?";
        breathingCircle.classList.remove("inhale","exhale");
        breathingBtn.textContent="Começar exercício";
    }
});

const moodCards=document.querySelectorAll(".mood-card");
const moodResult=document.getElementById("moodResult");

moodCards.forEach(card=>{
    card.addEventListener("click",()=>{
        moodCards.forEach(item=>item.classList.remove("selected"));
        card.classList.add("selected");

        moodResult.innerHTML=`
            <span>🌱</span>
            <p>${card.dataset.message}</p>
        `;
    });
});
