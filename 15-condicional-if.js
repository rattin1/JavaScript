var anoNascimento = 2003;

if (anoNascimento > 2003)
    console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003)
    console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003)
    console.log(`A pessoa nasceu em 2003!`);

//condicional composto com if
const login = "admin";
var senha = "123456";

//banco de dados
const loginUser = "admin"
const senhaUser = "admin"

if (login == loginUser && senha == senhaUser) // && significa -- E || significa OU
    console.log(`Acesso permitido!`)
else console.log(`Acesso negado!`)

//função sinaleiro
function sinaleiro(cor){
    if (cor == "vermelho")
    console.log(`Pare`)

    else if (cor == "amarelo")
    console.log(`Preste atenção`)

    else if (cor == "verde")
    console.log(`Siga`)

    else
    console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`)
}
sinaleiro("rosio")

//desvio condicional if com bloco e comandos
console.log(`------------------------------`)
var idade = 18;

if (idade <= 18) {
    console.log("entrou no if...");
    idade++, console.log("Incrementei a idade...");
    console.log(`A nova idade é ${idade}`);
    console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

//desvio condicional if inline (termário)
    //validação (algo == algo) ou (algo > algumacoisa)
    // ? (IF)
    //Se for verdadeiro
    // : (ELSE)
    //Se for falso 
    // testeDeValidacao == ? "Bla bla" : ("Ble ble")
var preco = 500;

var resultado = preco <= 100 ? "tá barato" : "Vish ta caro!"

if (preco  <=100) console.log(`Ta barato`)
else console.log(`Vish ta caro!!!`)


