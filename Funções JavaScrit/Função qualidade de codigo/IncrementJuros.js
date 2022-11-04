function incrementarJuros(valor, porcentualJuros){
    const valorDeAcrescimo = (porcentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}


console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 90));
console.log(incrementarJuros(100, 1000));
