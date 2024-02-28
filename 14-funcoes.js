function saudacao(nome) {
  console.log(`Olá ${nome}, seja bem-vindo!`);
}
saudacao("nome2");
saudacao("nome1");
saudacao("nome2");

//criando uma função de soma de dois valores, retornando um resultado
function somar(valor1, valor2) {
    return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5,3)}`);
console.log(`12 + 8 = ${somar(12,8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9
var v2 = 6

console.log(`v1 + v2 = ${somar(v1,v2)}`);


//criando uma função que calcula e retorna o desconto em uma venda
function desconto(valorVenda, desc) {
    return (valorVenda * desc) / 100;
}

var totalPedido = 300;
var totalDesconto = desconto(totalPedido, 5);

console.log(`---------------------------------------`);
console.log(`Total do pedido: R$${totalPedido}`);
console.log(`Total dos descontos R$${totalDesconto}`);
console.log(`Valor final da venda R$${totalPedido - totalDesconto}`);
console.log(`----------------------------------------`);

//Criando uma função que apresenta uma pessoa
function apresentaPessoa(nome, idade, cidade) {
    console.log(
        `Apresento a vocês: ${nome}, que tem ${idade} e mora em ${cidade}!`
    );
}
apresentaPessoa("Ryan", 16, "Jaú");