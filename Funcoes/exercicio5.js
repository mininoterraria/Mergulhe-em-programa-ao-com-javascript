//Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(numero1,numero2){
    if(numero1 > numero2){
        return numero1;
    }else if(numero1 < numero2){
        return numero2;
    }else{
        return ("Ambos são iguais!");
    }
}
console.log(maiorNumero(15,16));
