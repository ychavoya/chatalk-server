const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({
        message: 'Hola mundo',
    });
});

app.listen(PORT, () => {
    console.log('Servidor montado en el puerto ' + PORT);
;})