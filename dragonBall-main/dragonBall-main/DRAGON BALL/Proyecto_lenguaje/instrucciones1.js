const sonidos = document.getElementById('sonido');

document.addEventListener('click', function(evento){
    sonidos.innerHTML += '<audio src="audio/Gran Sayijaman.mp3" autoplay></audio>'

} )

