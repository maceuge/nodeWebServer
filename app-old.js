const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Euegnio',
        appellido: 'Vr',
        edad: 32,
        casado: false,
        auto: 'BMW',
        casa: true,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('Hola Node WebServer');
    res.end();

}).listen(3000);

console.log('Escuchando el puerto 3000');