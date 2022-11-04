const peso = 110;
const altura = 1.85;

const imc = peso / Math.pow (altura,2);


if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <25  ) {
    console.log('peso normal')
}else if (imc >= 25 && imc <30  ) {
    console.log('acima do peso')
}else if (imc >= 30 && imc <40  ) {
    console.log('obeso')
}else{
    console.log('obesidade grave')
}