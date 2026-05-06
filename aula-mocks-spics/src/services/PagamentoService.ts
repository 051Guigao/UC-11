
export class PagamentoService {
    processarPagamento(valor: number): Boolean{
        console.log(`Pagamento processado no valor de R$ ${valor}`);
        return true;
    };
};