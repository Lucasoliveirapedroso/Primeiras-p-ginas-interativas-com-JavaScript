function maiorIdade(idade){
    if (idade < 18) {
        return 'Você é menor de idade';
    } else {
        return 'Você é maior de idade';
    }
}

console.log( maiorIdade(18));