function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    }
    return calcularMDC(b, a % b);
};

function indiceMaior(arr) {

    const maiorValor = Math.max(...arr);
    const indicedoMaior = arr.indexOf(maiorValor);
   
    return {indicedoMaior};
};

function indiceMenor(arr) {

    const menorValor = Math.min(...arr);
    const indicedoMenor = arr.indexOf(menorValor);

    
    return {indicedoMenor};
};

function soma(limite) {
    let multiploDe5 = 0
    let multiploDe7 = 0
    for(i=0;i <= limite;i++){
        if(i % 5 === 0 && i % 7 !== 0)
            multiploDe5 += i;
        if(i % 7 === 0 )
            multiploDe7 += i;
}
return multiploDe5 + multiploDe7;
}


module.exports = {calcularMDC, indiceMaior, indiceMenor, soma};