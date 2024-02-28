function idade(anoAtual, anoNascimento) {
  return anoAtual - anoNascimento;
}

console.log(`Jair Bolsonaro tem ${idade(2024, 1988)} anos`);

function tanque(gasosa, km) {
  return gasosa / km;
}

var km = 12; //o veículo anda 12km com 1 litro

console.log(
  `O carro consegue andar ${tanque(60, km)} kilometros com 6 litros de gasolina`
);

console.log("--------------------------------------");

var adolesecente = 16;

function vota() {
  if (adolesecente > 15) console.log("Pode votar")
  else console.log("Não pode votar")
}

vota();

console.log("----------------------------------------");

var adulto = 86;

switch (true) {
  case adulto < 16:
    console.log(`Não pode votar`);
    break;
  case adulto >= 16 && adulto < 18:
    console.log(`Não precisa votar, mas pode`);
    break;
  case adulto >= 18:
    console.log(`Precisa votar`);
    break;
}
