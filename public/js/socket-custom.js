var socket = io();

socket.on('connect', function () {

    console.log('Conectado al servidor!');
});

socket.on('disconnect', function () {

    console.log('Perdida la conexion al servidor!');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Lucas',
    mensaje: 'HolaMundo!'    
}, (respuesta) => {
    //console.log('Se disparó el callback');
    console.log('Respuesta del servidor: ', respuesta);
});



// Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {

    console.log('Desde el servidor: ', mensaje);
});

