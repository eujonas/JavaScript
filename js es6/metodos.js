
// includes, startsWith, endsWith

let nomes = ["Jonas", "Lucas", "Jose", "São Paulo"]; // LISTA DE NOMES

console.log(nomes.includes("Maria")); //RETORNARÁ UM VALOR BOLEANO. MARIA ESTÁ NA LISTA ? 
console.log(nomes.includes("São Paulo"));

if (nomes.includes("Jonas")) { // É CASE SENSITIVE
    console.log("ESTA NA LISTA") // SE O NOME ESTIVER INCLUIDO NA LISTA
} else {
    console.log("NAO ESTA NA LISTA") //CASO NAO ESTEJA INCLUSO NA LISTA
}

let nome = "Jonas";

console.log(nome.startsWith("Jo")); //RETORNARÁ UM VALOR BOLEANO AO ANALISAR APENAS O PRIMEIRO ITEM, E COMPARA O INÍCIO.

console.log(nome.endsWith("eus")); //RETORNARÁ UM VALOR BOLEANO AO ANALISAR APENAS O PRIMEIRO ITEM, POREM COMPARA O FINAL.