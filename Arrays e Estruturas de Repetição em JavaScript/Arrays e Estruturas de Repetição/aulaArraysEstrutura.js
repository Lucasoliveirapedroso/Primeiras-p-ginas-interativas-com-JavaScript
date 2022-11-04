const notas = [];

notas.push(7);
notas.push(8);
notas.push(10);
notas.push(9);
notas.push(5);
notas.push(6);

let soma = 0;
let media = 0;
for (let i = 0; i < notas.length; i++) {
    const nota  = notas[i];
    soma = soma + nota;
    media = soma / notas.length;
}

console.log(soma);
console.log(media);

/*const alunos = ['lucas', 'fran', 'alice'];


alunos.push('teste')
//push adiciona

alunos [4] = 'teste2';

console.log(alunos);*/