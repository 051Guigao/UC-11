import {calcularFrete} from '../src/CalcularFrete';

describe('Função calcula o frete', () => {

    it('Frete gratis deve ser aplicado se valor for maior que 200',() => {
        expect(calcularFrete(240)).toBe(0);
    });
    it('Frete deve ser aplicado pois valor é menor que 200', () => {
        expect(calcularFrete(160)).toBe(20);
    });
});