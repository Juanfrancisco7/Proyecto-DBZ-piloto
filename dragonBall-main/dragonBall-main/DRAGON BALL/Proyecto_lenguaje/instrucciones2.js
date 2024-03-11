const sonidos = document.getElementById('sonido');
//sonidos dbz
document.addEventListener('keydown', function(evento){
    if (evento = 'm') {
        sonidos.innerHTML += '<audio src="audio/Dynamite Battle.mp3" autoplay ></audio>'
    }
} )
