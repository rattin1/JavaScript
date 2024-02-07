var nome = "Lóide";
var banco = "Santander";
var agenc = 40033001;
var conta = "1732395-4";
var saldo = 12;

console.log("Dados Da Conta:");
console.log("");
console.log("Nome:", nome);
console.log("Banco:", banco);
console.log("Número da Agência:", agenc);
console.log("Saldo Atual:", saldo);

console.log("Transferências:");
console.log("");

saldo += 29;
console.log("Pix recebido de Adam Sandler (R$29). Saldo atual:", saldo);
console.log("___________________________________________________________");
saldo += 10;
console.log("Pix recebido de Puro Osso (R$10). Saldo atual:", saldo);
console.log("___________________________________________________________");
saldo += 1000;
console.log("Pix recebido de Felipe Neto (R$1000). Saldo atual:", saldo);
console.log("___________________________________________________________");
saldo -= 1050;
console.log("Pix enviado para FUNDO DE GARANTIA (R$1050). Saldo atual:", saldo);
console.log("___________________________________________________________");
saldo += 10000;
console.log(
  "Pix recebido de Peter Griffin (R$10000). Saldo atual:",
  saldo
);
