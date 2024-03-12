// // Definindo uma classe pessoa
// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //criando objetos do "tipo" pessoa
// var pessoa1 = new Pessoa("Dienifer", 52);
// var p2 = new Pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// //----------------------------------------------------------------------------------
// //Abstração - abstraindo as caracteristicas mais importantes e descartando detalhes irrelevantes!

// console.log("-----------------------Abstração--------------------");

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );

// meuPet.alimentar();

// console.log("------------------------Herança---------------------");
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`🐶 Au au! 🐶`);
//   }
// }
// const pet = new Animal("Carlos", 10);
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log(" ");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}



