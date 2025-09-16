const aprovado = true;
let mensagem = "";

//Modo no if tradicional
if (aprovado == true) {
    mensagem = "Aprovado"
} else {
    mensagem = "Reprovado"
}

//Modo ternario
//          condição        ? se verdadeiro : se falso
mensagem = (aprovado == true) ? "Aprovado" : "Reprovado;"