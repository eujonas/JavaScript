
var data = new Date();
console.log(data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()) //em mês existe um incremento +1...
/*
console.log(data.getHours()) //exibe somente a hora
console.log(data.getMinutes())  // exibe somente os minutos
console.log(data.getSeconds()) // exibe somente os segundos
console.log(data.getMilliseconds()) //exibe somente os milisegundos
*/

var novadata = new Date("Februery 16, 2000"); //definindo a data que deseja atraves dos paramentros
//formatando a data para o padrao BR
console.log(novadata.getDate()+"/"+(novadata.getMonth()+1)+"/"+novadata.getFullYear()) //em mês existe um incremento +1...
/*
console.log( Date.parse(novadata)) //transforma a datanova em milisegundos
console.log(novadata.getDate()); //exibe o dia do mês 
console.log(novadata.getMonth())// exibe o número referente ao mês (começando por janeiro = 0, fevereiro = 1...)
console.log(novadata.getDay()) //exibe o dia da semana (começando pelo domingo = 0, quarta seria = 3...)
console.log(novadata.getFullYear()) //exibe o ano...
*/
var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
console.log("Dia da semana em que nasci: ", dias[novadata.getDay()])

console.log(novadata.setDate(novadata.getDate()+5))//Somando + dias atraves do metodo SET que atribui 
console.log(novadata.setHours(novadata.getHours()+15)) //somando + horas atraves do metodo SET

