//Laço de repetição FOR
//escrever para o usuário 1000x "Prestar mais atençao na aula"
for (let i = 0; i <= 1000; i++) {
  if (1 % 2 == 0) {
    console.log(i);
  }
}

//Escreva todos os números de 1 a 20 com FOR
for (let w = 0; w <= 20; w++) {
  console.log(w);
}

//Escreva todos os números PARES entre 1 a 20 com FOR
// for (let n = 1; n <= 20; n++) {
//     if (n % 2 == 0) {
//         console.log(n) //
//     }
// }

for (let n = 2; n <= 20; n += 2) {
  console.log(n);
}

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos.
//VAR = cria variável global
//CONST = cria consante, não muda
//LET = cria variável funcional dentro de um grupo código
// tudo que está dentro de chaves é um grupo de código.

var numb = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0;

for (var s = 0; s < numb.length; s++) {
  soma += numb[s];
}
console.log("A soma dos elementos do array é:", soma);

// Dado um valor com números 5,6,8,14,0,9,7,2.
// Multiplique todos os seus elementos por 3 utilizando o loop FOR 
// Em seguida, mostre o novo valor

var numbe = [5,6,8,14,0,9,7,2];
var mult

for ()