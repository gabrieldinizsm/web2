/*Desafio
Criar um vetor com 20 elementos inteiros. Imprimir o maior e o menor valor, 
sem ordenar, o percentual de números pares e a média dos elementos do vetor. */

//var vetor= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20];

//document.write ("<hr>" +vetor);

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

var random = [];

for (var i = 0; i < 20; i++){
	random[i] = parseInt(prompt("Entre com o o valor da posição" +i));
}
var valorImpar = 0;
var valorPar = 0;

for (var i = 0; i < random.length; i++){
	if (i % 2){
			valorImpar = valorImpar + 1;
	} else {
			valorPar = valorImpar + 1;
	}
}

document.write("<hr>O menor valor é" + Array.min(random) );
document.write("<hr>O mais valor é" +Array.max(random) ); 
			
document.write("<hr>A porcentagem de números pares é" + (100*valorImpar/20));
document.write("<hr>A porcentagem de números impares é" + (100*valorPar/20));	