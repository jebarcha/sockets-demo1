var socket = io();

// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Los emmit son para enviar informacion
socket.emit(
    'enviarMensaje', {
        usuario: 'Jose',
        mensaje: 'Hola Mundo'
    },
    function(resp) {
        console.log('Respuesta del server: ', resp);
    }
);

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});