const sonidos = document.getElementById('sonido');

document.addEventListener('keydown', function(evento){
    if (evento = 'enter') {
        sonidos.innerHTML += '<audio src="audio/Burn Up.mp3"autoplay lopp></audio>'
    }
} )
