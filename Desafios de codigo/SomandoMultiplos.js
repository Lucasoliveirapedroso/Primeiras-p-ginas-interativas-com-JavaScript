/*Desafio Dado um número A e o seu limite N, 
encontre a soma de todos os múltiplos A até o seu limite N.
Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 
Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.
Exemplo 1
Entrada	    Saída
5
20	        50*/

let a = 5;
let N = 20;
let mult5 = 0;
    for (i = 0; i <= N; i++) {
        if(i % a == 0)
        mult5 += i;       
    }  
console.log(mult5)
 