import { PedidoService } from "../src/services/PedidoService";


describe('PedidoService', () => {
    it('Deve finalizar o pedido quando pagamento for aprovado', () => {
        const mockPagamentoService = {
            processarPagamento: jest.fn().mockReturnValue(true)
        };
        const pedidoService = new PedidoService(mockPagamentoService as any);
        const resultado = new pedidoService.finalizarPedido(100);
        expect(resultado).toBe('Pedido finalizado com sucesso');
        expect(mockPagamentoService.processarPagamento).toHaveBeenCalledWith(100);
    });
});