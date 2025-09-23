function calcularComissao(valor, percenComissao) {
    let valorComissao = valor * percenComissao / 100;
    return valorComissao;
}

let comissaoRetornada;
comissaoRetornada = calcularComissao(2500, 5);

let salario = 3000;
salario = salario + comissaoRetornada;
console.log(`O valor da comissão é de R$${salario},00`);