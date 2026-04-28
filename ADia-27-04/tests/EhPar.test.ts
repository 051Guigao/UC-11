import {ehPar} from '../src/EhPar';

describe('Função ehPar', () => {

    it('deve retornar true para o número par', () =>{
        expect(ehPar(4)).toBeTruthy();
    });
    it('deve retornar false para o número impar', () =>{
        expect(ehPar(3)).toBeFalsy();
    });
});