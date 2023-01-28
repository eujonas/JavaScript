//MAP PERMITE PERCORRER TODO UM ARRAY

// let nomes = ["Jonas", "Lucas", "Alexandre", "Carlos", "Ana"]

// nomes.map((item, index)=>{
//     console.log(`${item} está na posição ${index}`);
// })

//REDUCE = BUSCA REDUZIR UM ARRAY

// let numeros = [1, 2, 3, 5, 8];



// let total = numeros.reduce((acumulador, numero)=>{
//     console.log(`${acumulador}`);
//     console.log(`${numero}`);
//     console.log("==============")

//     return acumulador += numero;
// })
// console.log("Após a ultima iteracao: "+ total)

//FIND FAZ UMA BUSCA E EXIBE APENAS UM ITEM 
// let listagem = ["Jonas", 22, "Lucas", 1491442, "Sousa", "Carlos"];

// let busca = listagem.find((item)=>{
//     if(item === 1491442){
//         return console.log("ITEM ENCONTRADO");
//     }
// })
// console.log(busca);

//FILTER FAZ A BUSCA E EXIBE O TOTAL DE ITENS COMPARADOS POSSIVEIS
let palavras = ["Jonas", "Abacati", "Lua", "Ano", "Cavalcante", "14010"];

let resultado = palavras.filter((item)=>{
    return item.length == 5;
})
console.log(resultado);