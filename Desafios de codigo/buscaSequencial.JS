let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valor = 10;
let i = 0;
let notF = 0;

while( i != elementos.length){
    if(valor != elementos[i]){
        notF++;
    }else{
        print( "Achei " + valor + " na posicao " +  elementos.indexOf(valor))   
    }
    i++;
}
if (notF == elementos.length) {
    print("Numero "+ valor +" nao encontrado!") 
}

