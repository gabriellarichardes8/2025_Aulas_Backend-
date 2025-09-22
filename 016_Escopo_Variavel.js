let variavelGlobal = "Sou global";

function minhaFuncao() {
    let variavelLocal = "Sou local"
    console.log(variavelGlobal);    //Acessa a variável global
    console.log(variavelLocal);     //Acessa a variável local
}

minhaFuncao();
console.log(variavelGlobal);   //Acessa a variavel global
console.log(variavelLocal);    //Erro! variavelLocal não existe nesse escopo

