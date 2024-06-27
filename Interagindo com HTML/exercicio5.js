//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta
function somarNumeros(){
    let numero1 = parseInt(prompt("Insira um número:"));
    let numero2 = parseInt(prompt("Insira outro número:"));
    let resultado = (numero1 + numero2);
    alert(`Resultado da soma: ${resultado}`);
}
