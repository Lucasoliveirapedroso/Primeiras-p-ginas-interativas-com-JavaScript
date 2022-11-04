function pagamento(tipoPagamento) {
    if (tipoPagamento == '1') {
        return  precoProduto - (precoProduto * 0.10);
    } else if (tipoPagamento == '2'){
        return precoProduto - (precoProduto * 0.15);
    } else if (tipoPagamento == '3'){
        return  precoProduto /2 ;
    }else {
        return precoProduto + ( precoProduto *  0.10);
    }    
}
const precoProduto = 100;
console.log(pagamento(1));

