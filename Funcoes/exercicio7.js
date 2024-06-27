//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro
function calculoImc(peso,altura){
    let calculo = peso / (altura * altura);
    console.log(`Resultado do cálculo: ${calculo.toFixed(2)}kg`);
}

calculoImc(67.55,1.71);

