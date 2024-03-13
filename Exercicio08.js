class Aluno {
  constructor(ra, nome, dataNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.dataNascimento;
  }
  apresentar() {
    console.log(`Aluno: ${this.nome}
        RA: ${this.ra}
        Idade: ${this.calcularIdade()}
        Curso: ${this.curso}`);
  }
}

var aluno1 = new Aluno("4723", "Raimundo", 2008, "DS");

aluno1.apresentar();

console.log("-------------------------------------------")
// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tam) {
    this.sabor = sabor
    this.preco = preco
    this.tam = tam
  }
  pedido() {
    console.log(`O pedido é um sorvete de ${this.sabor} de tamanho ${this.tam} com o preço de R$${this.preco}`)
  }
  getPreco() {
    return this.preco = novoPreco;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}

const pedido1 = new Sorvete("morango", 7, "grande");
const pedido2 = new Sorvete("chocolate", 3, "pequeno");
const pedido3 = new Sorvete("melancia", 5, "medio");
pedido1.pedido()
pedido2.pedido()
pedido3.pedido()

console.log("Jornal: Ouve uma Inflação");

pedido1.setPreco(10.51);
pedido1.pedido()

console.log("============================================================")
console.log("============================================================")

// 1.Comparação de strings (sem case sensitive):
// Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).

function compararStrings(str1, str2) {

  const str1LowerCase = str1.toLowerCase();
  const str2LowerCase = str2.toLowerCase();

  return str1LowerCase === str2LowerCase;
}

const string1 = "Olá mundo!";
const string2 = "olá mUndo!";

console.log(compararStrings(string1, string2)); // true

const string3 = "Olá mundo!";
const string4 = "Olá, mundo!";

console.log(compararStrings(string3, string4)); // false

console.log("============================================================")
console.log("============================================================")

// 2.Extrair números de uma string:
// Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

function extrairNumeros(str) {
  // Expressão regular que corresponde a qualquer dígito
  const regex = /\d/g;

  // Encontra todos os números na string
  const numeros = str.match(regex);

  // Retorna os números como uma lista
  return numeros;
}

const string5 = "Olá mundo 123!";
const numeros5 = extrairNumeros(string5);

console.log(numeros5); // ["1", "2", "3"]

console.log("============================================================")
console.log("============================================================")

// 3.Inverter a ordem das palavras em uma frase:
// Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.

function inverterFrase(frase) {
  // Divide a frase em palavras
  const palavras = frase.split(" ");

  // Inverte a ordem das palavras
  palavras.reverse();

  // Retorna a frase com as palavras invertidas
  return palavras.join(" ");
}
const frase1 = "Olá mundo!";
const fraseInvertida1 = inverterFrase(frase1);

console.log(fraseInvertida1); // "mundo! Olá



