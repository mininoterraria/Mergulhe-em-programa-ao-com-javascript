//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80
function converterDolarEmReal(valorDolar){
    let valorConvertidoReal = (valorDolar * 4.80);
    return valorConvertidoReal.toFixed(2);
}
console.log(`O valor convertido em reais é: R$ ${converterDolarEmReal(1)}`);