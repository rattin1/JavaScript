//Operadores Lógicos
var manha = true;
var sono = true;

console.log("--------------------")
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Operador AND (E):", manha && sono); // comparando se é manhã e estou com sono
console.log("Operador AND (OU):", manha || sono);

sono = false
console.log("Operador AND (E):", manha && sono); // comparando se é manhã e estou com sono
console.log("Operador AND (OU):", manha || sono);

manha = false
console.log("Operador AND (E):", manha && sono); // comparando se é manhã e estou com sono
console.log("Operador AND (OU):", manha || sono);
