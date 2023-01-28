var nomes = ["Jonas", "Lucas", "Matias", "Carlos"];

var converte = nomes.toString(); //toString converte todo o array em uma string de valores separados por virgula
var especifica = nomes.join("/"); //join permite especificar um separador ( / . , ; ) por exemplo

var add = nomes.push("Marcelo"); //push adiciona ao fim do array, um novo elemento...
var add = nomes.unshift("testes"); //unshift adiciona no início do array, um novo elemento...

nomes.pop(); //pop remove o ultimo elemento do array
nomes.shift();//shift remove o primeiro elemento do array

var selecoes = ["Brasil", "França", "Croácia"];
var times = ["São Paulo", "Palmeiras", "Santos"];

var mesclar = selecoes.concat(times); // concat permite juntar duas listas de array: selecoes + times

