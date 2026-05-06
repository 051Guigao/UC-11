import { before, beforeEach, describe, it } from "node:test";
import { EnvioService } from "../services/EnvioService";

//No meu ficou dando o mesmo erro da aula passada, parece que nao reconhece o jest. ficou dando que nao encontra 'jest' e 'expect'

const mockTransportadora = {
    enviar: jest.fn(),
};



describe('EnvioService', () => {
    let service: EnvioService;
    beforeEach(() => {
        jest.clearAllMocks();
        service = new EnvioService(mockTransportadora);
    });

   it('Deve retornar sucesso pois tudo é valido', () => {
    mockTransportadora.enviar.mockReturnValue(true);

    const res = service.processarEnvio(5, '80320100');

    expect(res).toBe('Envio processado com sucesso');
    expect(mockTransportadora).toHaveBeenCalled();
    expect(mockTransportadora).toHaveBeenCalledWitch(5, '80320100', 20);
   });

   it('Deve retortnar erro pois CEP vazio'), () => {
    expect(() => service.processarEnvio(5, '')).toThrow('CEP obrigatório');
    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
   };

   it('Deve retornar erro pois passa do limite de 50kg', () => {
    expect(() => service.processarEnvio(51, '8032010')).toThrow('Peso excede o limite permitido');
    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
   });
   
   it('Deve retornar erro pois tranportadora recusa o envio', () =>{
    expect(mockTransportadora.enviar.mockReturnValue(false));
    expect(() => service.processarEnvio(5, '8032010')).toThrow('Envio recusado pela transportador')
   });

   it('Deve chamar enviar da transportadora usando spy', () => {
    const tranportadoraReal = { enviar: (peso: number, cep: string, frete: number) => true };
    const spy = jest.spyOn(tranportadoraReal, 'enviar');
    const serviceReal = new EnvioService(tranportadoraReal);
    
    serviceReal.processarEnvio(5, '8032010' );
    expect(spy).toHaveBeenCalledWitch(5, '8032010' , 20);
   });
   
});







