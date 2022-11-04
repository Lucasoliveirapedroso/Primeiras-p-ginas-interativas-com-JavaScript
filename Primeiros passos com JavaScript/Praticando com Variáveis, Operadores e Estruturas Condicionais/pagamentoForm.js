const precoProduto = 100;
// 1 debito
// 2 dinheiro ou pix
// 3 duas vezes
// 4 mais de duas vezes

const tipoPagamento = '4'

if (tipoPagamento === '1') {
    console.log( precoProduto - (precoProduto * 0.10))
} else if (tipoPagamento === '2'){
    console.log( precoProduto - (precoProduto * 0.15))
} else if (tipoPagamento === '3'){
    console.log( precoProduto /2)
}else {
    console.log(precoProduto + ( precoProduto *  0.10))
}