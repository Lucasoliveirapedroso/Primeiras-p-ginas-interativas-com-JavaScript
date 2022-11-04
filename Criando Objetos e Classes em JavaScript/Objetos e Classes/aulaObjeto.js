const pessoa = {
    nome: 'Lucas Oliveira',
    idade: 23,
    descrever: function () {
        console.log('Meu nome é  ' + this.nome + ' e minha idade é ' + this.idade );        
    }
};

console.log(pessoa['nome']);

/*
pessoa.descrever = function () {
    console.log('Meu nome é ' + this.nome);
}

pessoa.descrever();
*/