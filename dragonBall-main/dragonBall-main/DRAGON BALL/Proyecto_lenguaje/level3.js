//AQUI DECLARAMOS LAS VARIABLES PARA NUESTRO PROYECTO( Todo lo que sale en la cabecera)
puntos = 0;
tiempo = 25; 
necesario = 60;

//AQUI CONTRIMOS NUESTRAS FUNCIONES
//AQUI CONTRUIMOS NUESTRA FUNCION sumarpuntos
function sumarPuntos(){
    puntos++; //Que suba el puntaje en uno en uno
    document.getElementById("puntos").innerHTML = "Puntos: " + puntos + "/" + necesario + "  Tiempo: ";

    //Aquí contruimos la variable que domina el valor aleatorio dentro del contenedor
    //randNum toma solamente valores enteros (Math,round() y son aleatorios (random))
    randNum = Math.round(Math.random()*400);
    randNum2 = Math.round(Math.random()*850);

    //Aqui asigno ( movimiento vertical- style.marginTop) y
    // asigno randNum2 (movimiento horizontal - style.marginLeft)a la bolita
    document.getElementById("bolita").style.marginTop = randNum + "px"; //Que se mueva verticalmente(marginTop)
    document.getElementById("bolita").style.marginLeft = randNum2 + "px"; //Que se mueva Horizontalmente(marginLeft)

    if(puntos == 60){
        alert("Ganaste")
        tiempo = 25;
        puntos = 0;
    }
}

//Llamamos a la funcion sumarpuntos
document.getElementById('bolita').addEventListener("mouseover", sumarPuntos);

//Aqui contruimos nuestra función restarTiempo
function restarTiempo(){
    tiempo--; //aqui hacemos que el tiempo decrezca de 1 en 1 
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo ==-1){
        alert("Pierdes")
        tiempo = 25;
        puntos = 0;
    }
}

//Llamamos a la funcion restarTiempo
setInterval(restarTiempo,1000);



const sonidos = document.getElementById('sonido');

document.addEventListener('keydown', function(evento){
    if (evento = 'enter' ) {
        sonidos.innerHTML += '<audio src="audio/CHALA HEAD CHALA.mp3" autoplay volume=-10 ></audio>'
    }
} )
