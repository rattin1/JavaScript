//implementação de condicional em menu

var menuSelecionado = "Home";

switch (menuSelecionado) {
  case "Home":
    console.log(`Você clicou no link HOME`);
    break;
  case "Quem somos":
    console.log(`Você clicou no link Quem Somos`);
    break;
  case "Contato":
    console.log(`Você clicou no link Contato`);
    break;
  default:
    console.log(`Opção inválida`);
    break;
}

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log(`Primeiro Trimestre`);
        break;
    case 4:
    case 5:
    case 6:
        console.log(`Segundo Trimestre`)
        break;
    case 7:
    case 8:
    case 9:
        console.log(`Terceiro Trimestre`);
    default:
        break;
}
