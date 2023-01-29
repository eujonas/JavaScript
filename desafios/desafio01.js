//* Crie uma lista de produtos 
// 1. A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba 
//essa lista no console quando abrir o index.html.
// 2. Mostre no console quantos produtos tem nessa lista.
// 3. Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
// 4. Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse 
// produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome 
// deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
// 5. Remova o segundo item da sua lista.

let nomes = ["Jonas", "Lucas", "Carlos", "Marcelo"];
console.log(nomes);

console.log("TOTAL DE NOMES: " + nomes.length);

console.log("LISTA DE CONVIDADOS ATUAL: " + nomes.filter(n => n !== "Carlos"));//LISTA ATUAL APÓS REMOVER O ITEM 3 NA POSICAO 2 ...

let buscaNome = nomes.find(n => n === "Marcelo");

if(buscaNome){
    console.log(`${buscaNome} FOI ENCONTRADO NA LISTA DE CONVIDADOS`);
}
else{
    console.log("NAO ENCONTRADO");
}

nomes.splice(1, 1)
console.log(nomes);
