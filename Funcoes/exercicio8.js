//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro
function calculoFatorial(numero){
    let fatorial = numero;
    contador = 1;
    while (contador < numero){
        fatorial = fatorial * (numero - 1);
        numero--;
    }
    console.log(fatorial);
}
calculoFatorial(4);

