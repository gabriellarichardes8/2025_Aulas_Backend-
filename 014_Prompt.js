const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome?');
console.log(`Seja bem vindo(a), ${nome}!`);

let anoNasc = prompt(` ${nome}, qual é o ano que você nasceu?`)
let idade = 2025 - parseInt(anoNasc);
console.log(`${nome}, você tem ${idade} anos`);

let fezNiver = prompt('Você já fez aniversário esse ano? (s/n)')
if (fezNiver != 's'){
    idade--;
}

console.log(`${nome}, você tem ${idade} anos.`);
