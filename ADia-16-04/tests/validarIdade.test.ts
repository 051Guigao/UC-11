import {validadarIdade} from '../src/validarIdade';

describe('funçao validarIdade', () => {

    it('deve retornar true para o número 18 ou maior', () =>{
        expect(validadarIdade(18)).toBeTruthy();
    });
    it('deve retornar false para o número menor q 18', () => {
        expect(validadarIdade(15)).toBeFalsy();
    });
});