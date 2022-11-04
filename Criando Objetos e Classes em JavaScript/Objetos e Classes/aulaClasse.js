// como a pessoa deve ser
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

const lucas = new Pessoa('lucas', 23);
//lucas.nome = 'Lucas Oliveira';
//lucas.idade = 23;

const fran = new Pessoa ('fran', 23);
//fran.nome = 'Francieli';
//fran.idade = 23;

fran.descrever();
lucas.descrever();