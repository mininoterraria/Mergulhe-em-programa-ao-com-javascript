//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro
function calcularRetangulo(largura,altura){
    let calculoArea = (largura * altura);
    let calculoPerimetro = (2 * (largura + altura));
    console.log(`Área do retângulo: ${largura * altura}m, Área do Perímetro: ${2 * (largura + altura)}m`);
}
calcularRetangulo(5,10);


