document.getElementById("player").addEventListener("click", sumarPuntos);
puntos = 0;
tiempo = 28;
nesesarios = 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos:" + puntos + "/" + nesesarios ;

    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginLeft =randNum + "px";
    document.getElementById("player").style.marginTop =randNum2 + "px";
    if(puntos == 30){
        alert("ganaste ps");
    }

}

function ned(){

}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "Tiempo:" + tiempo;
    if(tiempo == 0){
        alert("perdiste pa");
        tiemo = 0;
        puntos = 0;
    }

}

setInterval(restarTiempo,1000);


