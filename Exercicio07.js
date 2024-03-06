// var popA = 100003;
// var popB = 300004;
// var ano = 0;

// while (popA < popB) {
//   ano++;
//   popA *= 1.03;
//   popB *= 1.015;
//   if (popA >= popB)
//     console.log(
//       `Vai demorar ${ano} anos para que a população da cidade A (${Math.round(
//         popA
//       )}) seja maior ou igual a da B (${Math.round(popB)})`
//     );
// }


// var xo = Math.random()

// function jogada() {
//   if (xo >= 0.5) {
//     var X = "X"
//     console.log(X)
//   }
//   else
//   var O = "O" 
// console.log(O)
// }

// jogada()

// var tabu = [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", " ", " "],
// ];


// let jogadorX = "X";
// let jogadorO = "O";

// function jogar(jogador) {
//   let linha = Math.floor(Math.random() * 3);
//   let coluna = Math.floor(Math.random() * 3);
//   if (tabu[linha][coluna] == " ") tabu[linha][coluna] = jogador;
//   else {
//     jogar(jogador);
//   }
// }

// var quemComeca = Math.random()

// if (quemComeca >= 0.5) {
//   jogar(jogadorO);
// }
// else jogar(jogadorX)

// console.table(tabu);

// function jogadona() {
//   while(true) {
//     const linha = Math.floor(Math.random() * 3);
//     const coluna = Math.floor(Math.random() * 3);
//     if (tabu[lnha][coluna] === "") {
//       return {  linha, coluna };
//     }
//   }
// }


// function jogar(linha, coluna, simbolo) {
//   matriz[linha][coluna] = simbolo;
// }

// const cleiton = "X";

// while (!verificarVencedor() && !verificarEmpate()) {
//   if (cleiton === "X") {
//     const { linha, coluna } = jogadona()
//     jogar(linha, coluna, cleiton);
//   }
//   if (verificarVencedor()) {
//     console.log(`O jogador ${cleiton} venceu!`);
//     break;
//   }

//   if (verificarEmpate()) {
//     console.log("Empatou!");
//     break;
//   }

//   cleiton = cleiton === "X" ? "O" : "X";
// }

// console.table(tabu);

// function verificarVencedor() {
//   for(let i = 0; i < tabu.lenght; i++) {

//     if (tabu[i][0] === tabu[i][1] && tabu[i][1] === tabu[i][2] && tabu[i][0] !== "") {
//       return tabu[i][0];
//     }

//     if (tabu[0][i] === tabu[1][i] && tabu[1][i] === tabu[2][i] && tabu[0][i] !== "") {
//       return tabu[0][i];
//     }
//   }

//   if (tabu[0][0] === tabu[1][1] && tabu[1][1] === tabu[2][2] && tabu[0][0] !== "") {
//     return tabu[0][0];
//   }
//   if (tabu[0][2] === tabu[1][1] && tabu[1][1] === tabu[2][0] && tabu[0][2] !== "") {
//     return tabu[0][2];
//   }

//   return "";
// }

// console.table(tabu);

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = Math.random() < 0.5 ? "X" : "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}

for (let rodada = 0; rodada < 9; rodada++) {
  if (jogadorX == "X") {
    jogar(jogadorX)
    jogadorX = "0"
    console.table(tabuleiro);
  }else{
    jogar(jogadorX);
    jogadorX = "X";
    console.table(tabuleiro);
  }
}


switch (true) {
  case tabuleiro[0][0] == tabuleiro[1][1] &&
  tabuleiro[1][1] == tabuleiro[2][2] &&
  tabuleiro[1][1] !== " ":
  return "";

  default:
  
}


console.table(tabuleiro);