class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca,cor,gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedio;
    }

    valorGasto(quantidadeKM, preco){
        return quantidadeKM *  this.gastoMedioKm * preco;
    }
    
}

const bmw = new Carro ('bmw', 'azul', 1 /8 );
console.log(bmw.valorGasto(100, 5));

const uno = new Carro ('uno', 'preto', 1 /20 );
console.log(uno.valorGasto(100, 5));