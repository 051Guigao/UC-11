import {statusaluno} from '../src/statusaluno'

describe('funçao statusaluno', () =>{
    it('deve retornar aprovado', () =>{
        expect(statusaluno(80,100)).toBe('aprovado');
    });
    it('deve retornar rec', () =>{
        expect(statusaluno(60,10)).toThrow('recuperaçao');
    });
    it('deve retornar reprovado', () => {
        expect(statusaluno(0,0)).toThrow('reprovado');;
    });
});