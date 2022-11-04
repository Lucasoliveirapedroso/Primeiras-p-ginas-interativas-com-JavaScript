const numeros =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
 
 
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (i % 2 === 0){
        console.log('par');
    } else{
        console.log('impar')
    }
    
}