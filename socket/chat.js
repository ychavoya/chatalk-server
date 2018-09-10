const { io } = require('../server');

io.on('connection', (client) => {
    console.log(client.id + ' conectado');
    
    client.on('mensaje', (data, callback) =>{
        client.broadcast.emit('mensaje', {
            usuario: client.id,
            mensaje: data.mensaje,
            fecha: new Date()
        });
        console.log(`${client.id}: ${data.mensaje}`);
        callback({
            status: 200,
            mensaje: 'Mensaje enviado',
            fecha: new Date()
        });
    });

    client.on('disconnect', () => {
        console.log(client.id + ' desconectado');
    });

});