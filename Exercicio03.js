var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"]; //criando Array

console.table(frutas);

frutas.push("Tangerina"); //adicionando no final
console.table(frutas);
frutas.unshift("Goiaba"); //adicionando no começo
console.table(frutas); 

console.log("Sexta posição:", frutas[5]); //exbindo conteúdo do indice 5

frutas.splice(4, 1); //excluindo uva
console.table(frutas);

var frutas = ["Maçã", "Pera", "Morango"]; //criando cópia
console.table(frutas);