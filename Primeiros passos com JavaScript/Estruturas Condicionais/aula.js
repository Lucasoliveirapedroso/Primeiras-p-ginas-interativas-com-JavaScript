const numero = 5;
const eNumeroPar = (numero % 2) === 0;  

if (eNumeroPar) {
    console.log('O número é par');
}else  {
    console.log('O número é impar');     
}


/*
const numero = 0;
//condicional
//comparar usar ===
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);  

if (numeroPar) {
    console.log('par');     
} else {
    console.log('impar');
}

/////////////////////////////////////////////////

// condicional simples
// podendo usar quantos else if quiser
const numero = 0;
const numeroDiviPor5 = (numero % 5) === 0;  

if (numero === 0) {
    console.log('O número é inválido');
}else if (numeroDiviPor5) {
    console.log('Sim');     
} else {
    console.log('Não');
}
*/