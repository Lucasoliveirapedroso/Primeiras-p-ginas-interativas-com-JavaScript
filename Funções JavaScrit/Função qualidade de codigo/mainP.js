function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
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

(function main(params) {
    const peso = 110;
    const altura = 1.85;
    
    const imc = calcularIMC(peso, altura);    
    console.log(classificarIMC(imc));
})();

//main();



