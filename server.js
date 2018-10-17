var express = require('express')
var app = express()

app.get('/', function(req, res) {

    let salida = {
        nombre: 'Euegnio',
        appellido: 'Vr',
        edad: 32,
        casado: false,
        auto: 'BMW',
        casa: true,
        url: req.url
    }

    res.send(salida);

    // res.send('Hello World')
})

app.listen(3000, () => {
    console.log('El servidor inicio en el puerto 3000');
})