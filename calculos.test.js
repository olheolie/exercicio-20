const {calcularMDC, indiceMaior, indiceMenor, soma} = require('./constante');
;

describe('deve executar corretamente as funções', () => {    
    it('Deve calcular o MDC corretamente', () => {
        expect(calcularMDC(24, 16)).toBe(8);
    });
    it('Deve determinar o indice maior corretamente', () => {
        expect(indiceMaior([4,1,13,9,7])).toEqual({indicedoMaior: 2});
    });
    it('Deve determinar o indice menor corretamente', () => {
        expect(indiceMenor([4,1,13,9,7])).toEqual({indicedoMenor: 1});
    });
    it('Deve somar os multiplos de 5 e 7 corretamente', () => {
        expect(soma(999)).toBe(156361);
    });
});
