const gamebtn = document.querySelector('.game__btn');
const triesCounter = document.querySelector('.app-container__triesCounter');
const text=document.querySelector('.app-container__avatarText')


const minCeiled = Math.ceil(5);
const maxFloored = Math.floor(80);
const minv = Math.ceil(1);
const maxFv = Math.floor(6);
let triesNumber = 0;

const comments = {
    1:"Que palomo",
    2:"Bruh",
    3:"Manuel tendrá que ayudarte si.",
    4:"Eso Jordan son farsificao bro.",
    5:"Si pero goku le gana",
    6:"Sa!",
    7:"ni pa eso silve...",
    8:"me avisas cuando te canses",
    9:"En lo te esta llevando el diablo, klk como va todo?",
    10:"estiempo de conjurar... Testicular torsion.",
    11:"Felicidades, Ganaste pero a que costo?"
}


function changeLocation(){
    gamebtn.style.top = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)+ '%';
    gamebtn.style.left = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)+ '%';
    triesNumber+=1;
    triesCounter.innerText = triesNumber;
    tryD6(1,1);

}
function tryD6(){
    
    if(Math.floor(Math.random() * (maxFv - minv + 1) + minv) == 1){
        text.innerText = comments[Math.floor(Math.random() * (10 - 1 + 1) + 1)];
    }
}
function t(){
    alert("felicidades :') ganaste.")
    text.innerText = comments[11]
}
gamebtn.addEventListener("mouseover", changeLocation);
gamebtn.addEventListener("click", t);

