//Precisa do returne
let circunferencia = 45;

function valorPI() {
    return 3.1415;
}

function valorRaio(circunferencia) {
    let PI = valorPI()
    let valorCircunferencia = circunferencia / (2 * PI);
    return valorCircunferencia;
}
let resultadoRaio;
resultadoRaio = valorRaio(PI, circunferencia);
console.log(`O valor do raio é de ${resultadoRaio}`);