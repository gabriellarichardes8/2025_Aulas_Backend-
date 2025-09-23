//Precisa de returne
let altura = 10;
let base = 24;

function calcularArea(base, altura) {
    let areaTriangulo = base * altura / 2;
    return areaTriangulo;
}

let valorArea;
valorArea = calcularArea(altura, base);
console.log(`O valor da área com altura de ${altura} metros e base de ${base} metros é de ${valorArea} metros quadrados.`);