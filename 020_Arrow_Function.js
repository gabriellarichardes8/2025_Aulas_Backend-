//SITUÇÃO DA SAUDAÇÃO 💛
//Função Nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`);   
}

//Função Anônima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);   
}

//Função Arrow Function
const saudacaoArrow = (nome) => {     
    console.log(`Tenha um bom dia ${nome}!`);   
}



//SITUAÇÃO DA SOMA 🧡
//Nomeada
function soma(v1, v2) {
    console.log(v1 + v2);
}
soma(4, 8)

//Anônima
const somaAnonima = function (v1, v2) {
    console.log(v1 + v2);
}

//Função Arrow Function
const somaArrow = (v1, v2) => {    //console.log(( v1, v2 ) => v1 + v2 );
    console.log(v1 + v2);  //Outra forma dessa linha: return v1 + v2 
}