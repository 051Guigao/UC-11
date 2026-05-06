import { PagamentoService } from './PagamentoService';

export class PedidoService{
    constructor(private pagamentoService: PagamentoService) {};

    finalizarPedido(valor: number): String{
        if (valor <= 0) {
            throw new Error('Valor do pedido deve ser maior que zer0');            
        };
        const pagamentoAprovado = this.pagamentoService.processarPagamento(valor);
        if(!pagamentoAprovado){
            throw new Error('Pagamento não aprovado');
        };
        return 'Pedido finalizado';
    };
};