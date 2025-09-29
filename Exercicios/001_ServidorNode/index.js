const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor de produtos divos!')
});

const produtos = ['Morango🍓', 'Banana🍌', 'Uva🍇', 'Melância🍉', 'Tomate🍅', 'Maçã🍎'];
app.get('/produtos', (req, res) => {
    let html = '<h1>Lista de Produtos:</h1>';
    html += '<ul>';   // html = html + '<ul>'
    for (let produtoAtual of produtos) {
        html += `<li>${produtoAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    const produtoSel = produtos[id];
    if (produtoSel == undefined){
        res.send('Produto não encontrado!')
    }else{
        res.send(`Visualizando o produto do id ${id} - o produto se chama ${produtoSel}`)
    }
    res.send(`Você está visualizando o produto do id ${id} - o produto se chama ${produtoSel}`);
})


app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id_produto = req.params.id;
    const preco = parseFloat(req.params.preco);
    const qtde = parseFloat(req.params.qtde);
    const total = preco * qtde;
    res.send(`O produto do id ${id_produto} custa R$${preco}, 00 foi vendido ${qtde} peças, calculando o total de R$${total},00`);
}  )

app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a href="/"> 🏡 Principal</a> <br>
    <a href="/Lista de produtos"> 🔎 Produtos</a> <br>
    <a href="/produto/:id"> 👤 Produtos</a> <br>
    <a href="/produto/1"> 👧 Produto 1</a> <br>
    <a href="/produto/7"> 👶 Produto Inválido</a> <br>
    <a href="/produto/4"> 🧑 Produto 4</a> <br>
    <a href="/total/:id_produto/:preco/:qtde"> 📚 Total 1</a> <br>
    `;
    res.send(html);
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
} );