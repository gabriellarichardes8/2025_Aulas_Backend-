const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//configurando o motor de visualização EJS
app.set('view engine', 'ejs');

//configurando a pasta para os arquivos estáticos
app.use(express.static('public'));

//definindo o layout padrão da nossa página
app.use(expressLayouts);
app.set('layout', 'layouts/principal');

//
app.use(express.urlencoded({ extended: true}))

//rota principal do site
app.get('/', (req, res) => {
    //buscando o arquivo inder.ejs na pasta views
    res.render('index')
});

//rota da página sobre
app.get('/sobre', (req, res) => {
    res.render('sobre')
});

//rota juros simples
app.get('/juros_simples', (req, res) => {
    res.render('juros_simples')
});

app.post('/juros_simples', (req, res) => {
    //Recebendo os dados dos campos do formulário
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo;
    const juros = (capital * taxa * tempo) / 100;
    const total = Number(capital) + Number(juros);

    res.render('juros_simples', {capital, taxa, tempo, juros, total});
 })

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
})
