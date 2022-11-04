class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso /  (this.altura * this.altura); 
    }
    
    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <25  ) {
            return 'peso normal';
        }else if (imc >= 25 && imc <30  ) {
            return 'acima do peso';
        }else if (imc >= 30 && imc <40  ) {
            return'obeso';
        }else{
            return 'obesidade grave';
        }   
        
    }
    
}
const lucas = new Pessoa ('lucas', 80, 1.80)
console.log(lucas.calcularIMC());
console.log(lucas.classificarIMC());
