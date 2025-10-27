class Pessoa{
    constructor(nome, email){
        this.nome=nome
        this.email= email
    }

    apresentar(){
        return`Ola, eu soi ${this.nome} e meu email é ${this.email}`;
    }
}

let pessoaExemplo= new Pessoa("Yasmim", "email@gmail.com")

console.log(pessoaExemplo.apresentar())