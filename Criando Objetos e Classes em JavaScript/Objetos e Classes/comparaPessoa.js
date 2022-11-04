class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade; 
    }

    descrever () {
        console.log('Meu nome é  ' + this.nome + ' e minha idade é ' + this.idade + ' e nasci ' + this.anoNascimento);        
    }
}

function comparaPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log( pessoa1.nome + 'é mais velho(a) que ' + pessoa2.nome );
    }else if (pessoa1.idade < pessoa2.idade){
        console.log( pessoa1.nome + 'é mais novo(a) que ' + pessoa2.nome );
    } else{
        console.log( pessoa1.nome + ' tem a mesma idade que ' + pessoa2.nome );
    }
}
const lucas = new Pessoa('lucas', 23);
const fran = new Pessoa ('fran', 21);

comparaPessoas(lucas, fran);