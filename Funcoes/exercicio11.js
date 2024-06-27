//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14
function calcularCirculo(raio){
    let areaCirculo = 3.14 * (raio * raio);
    let perimetroCirculo = 2 * 3.14 * raio;
    console.log(`Área do circulo: ${areaCirculo.toFixed(2)}m, Perímetro do circulo: ${perimetroCirculo.toFixed(2)}m`);
}
calcularCirculo(5);

