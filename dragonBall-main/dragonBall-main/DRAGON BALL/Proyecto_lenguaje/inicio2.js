const sonidos = document.getElementById('sonido');

//al dar un click el audio se reproduce
document.addEventListener('click', function(evento){
    
    sonidos.innerHTML += '<audio src="audio/Vamos a buscar las esferas del dragon.mp3" autoplay></audio>'

} )

