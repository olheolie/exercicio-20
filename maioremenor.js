//Dado um array numérico qualquer sem valores repetidos, 
// descubra qual é o índice do maior valor e o índice do menor valor.

function indiceMaiorMenor(arr) {

    const maiorValor = Math.max(...arr);
    const menorValor = Math.min(...arr);

    const indicedoMaior = arr.indexOf(maiorValor);
    const indicedoMenor = arr.indexOf(menorValor);

    
    return {indicedoMaior, indicedoMenor};
}

const arr = [3, 2, 8, 1, 4, 12];
const {indicedoMaior, indicedoMenor} = indiceMaiorMenor(arr);

console.log("Indice do maior número = " + indicedoMaior);
console.log("Indice do menor número = " + indicedoMenor);

   

