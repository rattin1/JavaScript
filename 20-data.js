//criando um objeto do tipo data
var data1 = new Date();
console.log(data1);

// criando um objeto do tipo data com data especifica
var data2 = new Date("2005=05-12");
console.log(data2);

// extraindo partes de uma data
var data3 = new Date("2008=03-16");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

// minha idade

console.log("==================================================================")

const dataEu = new Date("2008=02-03");
const dataVida = new Date();

const diferenca = dataVida.getTime() - dataEu.getTime();
//console.log(`Diferença: ${diferenca}`);

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);

console.log("==============")

const diferencaAnos = dataVida.getFullYear() - dataEu.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(dataVida.getMonth() < dataEu.getMonth() || 
  (dataVida.getMonth() === dataEu.getMonth() && 
  dataVida.getDate() < dataEu.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  }

