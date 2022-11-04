// Criar uma programa com 5 variáveis para calcular preço total de uma viagem com escolha de combustível

let precoEtanol = 7.79;
let precoGasolina = 6.79;
let gastoMedioKm = 10;
let distanciaKM = 100;
let tipoCombutivel = 'gasolina';

if (tipoCombutivel === 'Etanol') {
    console.log( (distanciaKM / gastoMedioKm) * precoEtanol );    
} else {
    console.log( (distanciaKM / gastoMedioKm) * precoGasolina );
}