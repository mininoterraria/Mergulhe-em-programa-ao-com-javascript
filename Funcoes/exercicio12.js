//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
function tabuadaNumero(numero){
    contador = 1;
    while(contador <= 10){
        let tabuada = numero * contador;
        console.log(`${numero} * ${contador} = ${tabuada}`);
        contador++;
    }
}
tabuadaNumero(20);
