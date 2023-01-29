//Crie uma string que contenha o dia de hoje, exemplo: 

//Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes
//, e ano onde contenha apenas o ano.

// let data = new Date();
// let dia = data.getDate();
// let mes = data.getMonth()+1;
// let ano = data.getFullYear();

// console.log(`${dia}/${mes}/${ano}`);


//ou simplesmente...
//let data = new Date();
//console.log(data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear());

let hoje = "29/01/2023"
let [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);