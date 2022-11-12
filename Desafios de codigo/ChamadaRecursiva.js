function somatorio(N) {
    somatorio = N; 
    for (let i = 0; i < N; i++) {
        somatorio = (somatorio += i);
    }
    console.log(somatorio);
}
const N = 10;
somatorio(N)
