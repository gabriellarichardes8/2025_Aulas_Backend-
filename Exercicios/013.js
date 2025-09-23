//Nomeada
function saudarCliente(nome, sobrenome) {
    console.log(`Seja bem vindo, ${nome} ${sobrenome}!`);
}
saudarCliente("Gabriella", "Richardes Vicente");
saudarCliente("Matheus", "Henrique Nascimento dos Santos");
saudarCliente("Calleb", "Richardes dos Santos");

//Anônima
const saudarAnonima = function (nome, sobrenome) {
    console.log(`Seja bem vindo, ${nome} ${sobrenome}!`);
}
saudarAnonima("Gabriella", "Richardes Vicente");
saudarAnonima("Matheus", "Henrique Nascimento dos Santos");
saudarAnonima("Calleb", "Richardes dos Santos");

//Arrow Function
const saudarArrow = (nome, sobrenome) => {
    console.log(`Seja bem vindo, ${nome} ${sobrenome}!`);
}
saudarArrow("Gabriella", "Richardes Vicente");
saudarArrow("Matheus", "Henrique Nascimento dos Santos");
saudarArrow("Calleb", "Richardes dos Santos");