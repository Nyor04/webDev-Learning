const gamebtn = document.querySelector('.game__btn');
const triesCounter = document.querySelector('.app-container__triesCounter');
const minCeiled = Math.ceil(5);
const maxFloored = Math.floor(80);
let triesNumber = 0;


function changeLocation(){
    gamebtn.style.top = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)+ '%';
    gamebtn.style.left = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)+ '%';
    triesNumber+=1;
    triesCounter.innerText = triesNumber;

}

gamebtn.addEventListener("mouseover", changeLocation);

