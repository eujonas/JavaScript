//Crie uma lista de apenas numeros 1,3,5,7,0,9​
//  1. Ordene essa lista do menor para o maior.
//  2. Retire o primeiro numero desta lista.
//  3. Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

let numeros = [1, 3, 5, 7, 0, 9];

console.log("NUMEROS ORDENADOS:" + numeros.sort());

numeros.shift();
console.log(numeros);

numeros.reverse();
console.log("NUMEROS INVERTIDOS:" + numeros);