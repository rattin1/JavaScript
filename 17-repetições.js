//Laço de repetição FOR
//escrever para o usuário 1000x "Prestar mais atençao na aula"
// for (let i = 0; i <= 1000; i++) {
//   if (1 % 2 == 0) {
//     console.log(i);
//   }
// }

// //Escreva todos os números de 1 a 20 com FOR
// for (let w = 0; w <= 20; w++) {
//   console.log(w);
// }

//Escreva todos os números PARES entre 1 a 20 com FOR
// for (let n = 1; n <= 20; n++) {
//     if (n % 2 == 0) {
//         console.log(n) //
//     }
// }

// for (let n = 2; n <= 20; n += 2) {
//   console.log(n);
// }

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos.
//VAR = cria variável global
//CONST = cria consante, não muda
//LET = cria variável funcional dentro de um grupo código
// tudo que está dentro de chaves é um grupo de código.

// var numb = [5, 6, 8, 14, 0, 9, 7, 2];
// var soma = 0;

// for (var s = 0; s < numb.length; s++) {
//   soma += numb[s];
// }
// console.log("A soma dos elementos do array é:", soma);

// Dado um valor com números 5,6,8,14,0,9,7,2.
// Multiplique todos os seus elementos por 3 utilizando o loop FOR
// Em seguida, mostre o novo valor

// let num = [5, 6, 8, 14, 0, 9, 7, 2];

// for (let i = 0; i < num.lenght; i++) {
//   num[i] *= 3;
// }

// console.table(num);

// dada a matriz 2x3, escrever para o usuário todos os seus elementos
// com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);


for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        console.log(`Matriz[${linha}, ${coluna}] = ${matriz[linha][coluna]}`);
    }
}
