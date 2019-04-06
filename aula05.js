//Metodo consultor 
var frutas=new Array("Maça","Banana","Abacaxi","Morango");
document.write(frutas); 

// para mostrar o elemento em um determindada posição

var frutas=new Array("Maça","Banana","Abacaxi","Morango");
document.write("O elemento da posição é: "+frutas[2]);

//Arrays indexados
//Função length - para mostrar a quantidade de elementos array

var frutas=new Array("Maça","Banana","Abacaxi","Morango");
document.write("<hr>A quantidade de lementos é: "+frutas.length);

//Funçao indexOf + para identificar qual a posição do elemnto

var frutas=new Array("Maça","Banana","Abacaxi","Morango");
document.write("<hr>A quantidade de lementos é: "+frutas.indexOf("Banana"));

//LastIndexOf - informa qual a última ocorrencia de um determinado elemento
var frutas = new Array ("Maça","Banana","Abacaxi","Morango");
document.write ("<hr>A ultima posição do elemento é: "+ frutas.lastIndexOf("Banana"));

//Método literal - []

var frutas = ["Maça","Banana","Abacaxi","Morango"];
document.write ("<hr>"+frutas);

//uma string também é um array
var s="açai";
document.write ("<hr>A quantidade de elementos do array é:"+ s.length);

//Função de ordenação - Reverse - inverte a ordem dos elementos

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<hr> "+frutas.reverse());

//sort - para colocar os elementos em ordem alfabetica

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<hr>"+frutas.sort());

//Cortes e Emendas
//método join - para alterar o separador

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<hr>" +frutas.join ("-"));

//concat - para inserir elementos no vetor

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<hr>"+frutas.concat("Uva", "Pera"));

//slice - retorna o elemento a partir de onde foi definido

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<br>"+frutas.slice(2));

//splice - é utilizado para remover elementos do Array e incluir novos
//o primeiro parametro é a posição, o segundo a quantidade de elementos

var frutas = ["Maça", "Banana", "Abacaxi", "Morango"];
document.write ("<br>"+frutas.splice (1, 2, "Uva", "Pera"));
document.write ("<hr>"+frutas); 


//fila filo - (first in first out)o primeiro elemento a entrar e o primeiro a sair

//método push - adiciona elemento no final da fila

var aluno = ["Bruna", "Laís", "Caio", "Anie", "Bernardo"];
document.write ("<hr> O novo aluno{a) é:" +aluno.push("João"));
document.write ("<hr>"+aluno);

//Método shift - para remover o primeiro elemento da fila

var aluno = ["Bruna", "Laís", "Caio", "Anie", "Bernardo"];
document.write ("<hr> O aluno excluido é:" +aluno.shift());

//Método pop - para remover o ultimo elemento da fila
document.write ("<hr>O aluno excluido é:" +aluno.pop());

//metodo unshift - adiciona elemento no inicio da fila
var aluno = ["Bruna", "Laís", "Caio", "Anie", "Bernardo"];
document.write ("<hr>O aluno excluído é:" +aluno.unshift ("Julia"));