const scrolldown = document.querySelector(".scrollDown")
const span = document.querySelector(".span")
const calcBtn = document.querySelector(".calcBtn")
const percentShow = document.querySelector(".percentShow")
const closeBtn = document.querySelector(".closeBtn")
const checkAgain = document.querySelector(".checkAgainButton")
const displayans = document.querySelector(".displayAns")
let temp=false;

function openAns(){
    console.log("hello")    
    if(temp===false){
        temp=true;
        span.style.display="block";        
    }else{
        temp=false;
        span.style.display="none";
    }
}

function showPercentage(event){ 
    event.preventDefault();  
    const percent = Math.floor((Math.random()*100)+1)
    displayans.textContent=percent + "%";
    percentShow.style.display="block"
    closeBtn.addEventListener("click" ,close)
    checkAgain.addEventListener("click" ,close)

}

function close(){
    percentShow.style.display="none"
    location.reload()
}


scrolldown.addEventListener("click",openAns)
