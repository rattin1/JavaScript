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
