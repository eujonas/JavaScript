
// let notas1 = [10, 9, 8.5];
// let notas2 = [notas1, 3.4, 5, 6]; // percebese que nao exibir o resultado, tera uma lista dentro de outra, e nao a sequencia
// console.log(notas2);


// //maneira de juntar facilmente duas listas 
// let valores = [1, 2, 3];
// let spread = [...valores, 4, 5, 6];
// console.log(spread);

// let usuario = {
//     nome: "Jonas",
//     idade: 22,
//     altura: 1.65
// }

// let novoUsuario = {
//     ...usuario,
//     status: "Ativo",
//     cidade: "Mombaça / CE"
// }
// console.log(novoUsuario);

function novoUsuario(info){
    let dados = {
        ...info,
        status: "Ativo",
        cargo: "DEV",
    }
    console.log(dados);
}

novoUsuario({nome: "Jonas", sobrenome: "Lima", idade: 22})