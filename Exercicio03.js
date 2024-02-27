var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"]; //criando Array
console.table(frutas);

frutas.push("Tangerina"); //adicionando no final
console.table(frutas);
frutas.unshift("Goiaba"); //adicionando no começo
console.table(frutas);

console.log("Sexta posição:", frutas[5]); //exbindo conteúdo do indice 5

//frutas.splice(4, 1);

var position = frutas.indexOf("Uva"); //excluindo uva
frutas.splice(position, 1);
console.table(frutas);

var copia = frutas.slice(2, 5); //cópia do array
console.table(copia);

var idades = [18, 19, 20, 21, 22]; //criando vetor 5 elementos
console.table(idades);

console.log(idades[2]); //imprimindo 3 elemento

var copia2 = idades.slice(idades); //copia do original
console.table(copia2);

copia2[0] = idades[0] * 2;
copia2[1] = idades[1] * 2;
copia2[2] = idades[2] * 2;
copia2[3] = idades[3] * 2;
copia2[4] = idades[4] * 2;
console.table(copia2)