const scrolldown = document.querySelector(".scrollDown")
const span = document.querySelector(".span")
const calcBtn = document.querySelector(".calcBtn")
const percentShow = document.querySelector(".percentShow")
const closeBtn = document.querySelector(".closeBtn")
const checkAgain = document.querySelector(".checkAgainButton")
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

function showPercentage(){
    console.log("hello")
    
    percentShow.style.display="block"
    closeBtn.addEventListener("click" ,close)
    checkAgain.addEventListener("click" ,close)

    

}
function close(){
    percentShow.style.display="none"
}



calcBtn.addEventListener("click" , showPercentage)
scrolldown.addEventListener("click",openAns)