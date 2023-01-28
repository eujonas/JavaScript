// function convidados(...nomes){
//     console.log("Sejam bem vindos(a): " + nomes);
// }
// convidados(" Jonas", " Lucas", " Jr")

function sorteador(...numeros){
    console.log(numeros);
    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Número sorteado: " + numeros[numeroGerado]);
}

sorteador(1, 2, 3, 5, 8, 13, 21, 34, 55, 89);