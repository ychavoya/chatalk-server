const { io } = require('../server');

io.on('connection', (client) => {
    console.log(client.id + ' conectado');
    
    client.on('mensaje', (data, callback) => {
        let mensaje = {
            usuario: client.id,
            mensaje: data.mensaje,
            fecha: new Date(),
        }
        client.broadcast.emit('mensaje', mensaje);
        console.log(`${client.id}: ${data.mensaje}`);
        callback({
            status: 200,
            mensaje: 'Mensaje recibido',
            fecha: new Date(),
            data: mensaje,
        });
    });

    client.on('getOwnId', (data, callback) => {
        callback({
            status: 200,
            mensaje: 'ID enviada',
            fecha: new Date(),
            data: client.id,
        });
    });

    client.on('disconnect', () => {
        console.log(client.id + ' desconectado');
    });

});