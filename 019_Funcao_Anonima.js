//Função Nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`);   
}
saudacao("Joao");

//Função Anônima --> aquela que não possiu um nome)
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);   
}
saudacaoAnonima("Maria");

//Nomeada
function soma(v1, v2) {
    console.log(v1 + v2);
}
soma(4, 8)

//Anônima
const somaAnonima = function (v1, v2) {
    console.log(v1 + v2);
}
