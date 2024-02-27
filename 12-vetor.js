// const numeros = [1,2,3,4,5];
// console.log(numeros);
// console.log(numeros [2]);

// numeros[2]=6
// console.log(numeros);
// console.log(numeros[2]);

//Criando variáveis do tipo array (vetores)

var dinos = ["Tiranosarro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("  ");
console.table(dinos); //cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("Desnecessauro", "Velocirraptor"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //adiciona os itens no incio do array
console.table(dinos);

//Alterando elementos com base no indice (posição)
dinos[3] = "Titanossauro";
console.table(dinos);

//Obtendo um elemento com base em seu indice
console.log("Primeira posição:", dinos[0]);
console.log("Segunda posição:", dinos[1]);
console.log("Item de posição 20:", dinos[20]); //retorna indefinido

//Removendo elementos do vetor
dinos.pop(); //remove o último elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeirp elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove po elemento a partir do indice 1, contando 1.
console.table(dinos);

console.log("  ");
console.log("---------Continuação Aula----------");
console.log("  ");

var dinos =[
"Tricerátops",
"Tiranossauro Rex",
"Estegossauro",
"Anquilossauro",
"Brontossauro",
"Barney",
"Pterodáctilo",
"Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("0" + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("0" + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Tricerátops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("0" + elementoProcurado + " está no índice " + posicao);
