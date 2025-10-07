let produto = {
    nome: "Celular", 
    preco: 2000,
    marca: "Samsung",
    quebrado: false
}
//Exibindo todos os dados do meu objeto
console.log(produto);
//Eximindo apenas um dado do meu objeto
console.log(produto.nome);
console.log(produto['nome']);
//Undefined- não há esse dado
console.log(produto.modelo);

//Adicionando propiedades
produto.valor = 1900;
console.log(produto);
produto.modelo = 'Galaxy S24';
console.log(produto);

//Inteirando sobre as chaves do objeto utilizando o for
for (let chave in produto){
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);
}

let aluno = {
    nome: "Gabriella",
    sexo: "F",
    idade: 16,
    dados_mae: {
        nome: "Edneia",
        telefone: '18 996588519'
    },
    boletim: [
        {materia: "Português", nota: 10, faltas: 6},
        {materia: "Matemática", nota: 9, faltas: 4},
    ]
}
console.log(aluno);
console.log(aluno.dados_mae.telefone);

console.log(aluno.boletim);
console.log(aluno.boletim[1].nota);



