//soma de multiplos, 7 e 5
soma(999);
function soma(limite){
    let multiploDe5 = 0
    let multiploDe7 = 0
    for(i=0;i <= limite;i++){
        if(i % 5 === 0 && i % 7 !== 0)
            multiploDe5 += i;
        if(i % 7 === 0 )
            multiploDe7 += i;
}
console.log(multiploDe5 + multiploDe7);
}