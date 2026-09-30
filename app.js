var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});


function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não permitida!";
    }
    return a / b;
}



app.post('/soma', function (req, res) {
    var corpo = req.body;
    var resultado = soma(corpo.a, corpo.b);
    res.send(`O resultado da soma de \({corpo.a} e\){corpo.b} é ${resultado}`);
});


app.post('/subtracao', function (req, res) {
    var corpo = req.body;
    var resultado = subtracao(corpo.a, corpo.b);
    res.send(`O resultado da subtração de \({corpo.a} e\){corpo.b} é ${resultado}`);
});


app.post('/multiplicacao', function (req, res) {
    var corpo = req.body;
    var resultado = multiplicacao(corpo.a, corpo.b);
    res.send(`O resultado da multiplicação de \({corpo.a} e\){corpo.b} é ${resultado}`);
});


app.post('/divisao', function (req, res) {
    var corpo = req.body;
    var resultado = divisao(corpo.a, corpo.b);
    res.send(`O resultado da divisão de \({corpo.a} e\){corpo.b} é ${resultado}`);
});

var port = 3001;


app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});