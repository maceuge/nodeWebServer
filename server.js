var express = require('express')
var app = express()
var hbs = require('hbs');
require('./hbs/helpers/helpers');

// Para servir paginas estaticas dentro de la carpeta public
app.use(express.static(__dirname + '/public'));

// Express hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Para servir APIrestfull
app.get('/', function(req, res) {
    let salida = {
        nombre: 'eUgeNIo voRONtsOv',
        url: req.url
    }
    res.render('home', salida);
    // res.send(salida);
})

app.get('/about', function(req, res) {
    res.render('about', {
        imageUrl: 'img/no-img.jpg'
    });
})

app.listen(3000, () => {
    console.log('El servidor inicio en el puerto 3000');
})