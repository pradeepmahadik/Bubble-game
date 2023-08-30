var timer = 60;
var score = 0;
var hitrn = 0;

function increaScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var bul = "";

for(i = 1; i<=119;i++){
    var rn = Math.floor(Math.random()*10)
    bul +=`<div class="bubble">${rn}</div>`
}

document.querySelector("#bottom").innerHTML = bul;
}

function runTime(){
    var timerinter = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }else{
            clearInterval(timerinter);
            document.querySelector("#bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#bottom").addEventListener("click", function(dets){
   var checkNumber =  Number(dets.target.textContent);
   if(hitrn === checkNumber){
    increaScore();
    makeBubble();
    getNewHit();
   }

});



runTime();
makeBubble();
getNewHit();

