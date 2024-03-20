//Ola,aqui é um projeto teste de Type Script!!!

class Pessoa{

    //Atributos

    nome: string
    idade: number

    //Construtor

    constructor(nome: string, idade: number) {

        this.nome = nome;
        this.idade = idade;
    }

    //Metodo para apresentar informações da pessoa

    apresentar(): string {

        return 'Olá!,Meu nome é ${this.nome} e tenho ${this.idade} anos.';
    }
}

    //Criando uma instancia da classe Pessoa

    const pessoa1 = new Pessoa("James",30);

    //Chamando o método apresentar e exibindo o resultado no console

    console.log(pessoa1.apresentar());


    //Fim...