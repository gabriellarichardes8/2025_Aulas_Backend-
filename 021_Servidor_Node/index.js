// Criando constante para receber o módulo express
const express = require('express');

//Criando uma aplicação express
const app = express();


//💗Função Nomeada💗//
// function pgPrincipal(req, res){
//     res.send('Bem vindo ao Servidor Node.js com Express!')
// }

//💗Função Anonima💗//
//  const pgPrincipal = function(req, res) {
//     res.send('Bem vindo ao Servidor Node.js com Express!')
// }

//💗Função Arrow💗//
const pgPrincipal = (req, res) => {
    res.send('Bem vindo ao Servidor Node.js com Express!')
}


//Rota principal

//app.get('/', pgPrincipal);//
app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor Node.js com Express!')
});

app.get('/sobre', (req, res) => {
    res.send('Esta é a páagina Sobre do projeto')
});

const usuarios = ['Gabriella', 'Matheus', 'Alice', 'Calleb'];
app.get('/usuarios', (req, res) => {
    let html = '<h1>Lista de Usuários:</h1>';
    html += '<ul>';   // html = html + '<ul>'
    for (let usuarioAtual of usuarios) {
        html += `<li>${usuarioAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
})

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    if (usuarioSel == undefined){
        res.send('Usuário não encontrado!')
    }else{
        res.send(`Visualizando o perfil do id ${id} - seu nome é ${usuarioSel}`)
    }
    res.send(`Você está visualizando o perfil do id ${id} - seu nome é ${usuarioSel}`);
})

app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number (req.params.n1);
    const n2 = Number (req.params.n2);
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}`);
})

app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a href="/"> 🏡 Principal</a> <br>
    <a href="/sobre"> 🔎 Sobre</a> <br>
    <a href="/usuarios"> 👤 Usuários</a> <br>
    <a href="/usuario1"> 👧 Usuário 1</a> <br>
    <a href="/usuario/7"> 👶 Usuário Inválido</a> <br>
    <a href="/soma/16/19"> 📚 Soma 1</a> <br>
    `;

    res.send(html);
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
} );


