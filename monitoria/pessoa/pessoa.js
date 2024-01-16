class Pessoa {
    static _listaDePessoas = [];

    constructor(nome1, sobrenome1, idade1) {
        this._nome = nome1;
        this._sobrenome = sobrenome1;
        this._idade = idade1;

        if (this._idade < 18) {
            this._idade = null;
        }

        Pessoa._listaDePessoas.push(this);

    }

    // Getters

    getRetornaNome() {
        return this._nome;
    }

    getRetornaSobrenome() {
        return this._sobrenome;
    }

    getRetornaIdade() {
        return this._idade;
    }

    getRetornaNomeCompleto() {
        return this._nome + " " + this._sobrenome;
    }

    getRetornaLista() {
        return Pessoa._listaDePessoas;
    }

    getRetornaMedia() {
        let mediaIdades = 0;

        for (let i = 0; i < Pessoa._listaDePessoas.length; i++) {
            mediaIdades += Pessoa._listaDePessoas[i]._idade;
        }
        
        return mediaIdades /= Pessoa._listaDePessoas.length;
    }

    // Setters

    setNome(nome) {
        this._nome = nome;
    }

    setSobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    setIdade(idade) {
        this._idade = idade;
    }

    setNomeCompleto(nomeCompleto1) {
        nomeCompleto1 = nomeCompleto1.split(' ');

        this._nome = nomeCompleto1[0];
        this._sobrenome = nomeCompleto1[1];
    }

}

// Implementações da class Pessoa:

let objeto1 = new Pessoa("Sofia", "Laura", 16);
objeto1.getRetornaNome();
objeto1.getRetornaSobrenome();
objeto1.getRetornaIdade();
objeto1.getRetornaNomeCompleto();

objeto1.setNome("Mychael");
objeto1.setSobrenome("Abreu");
objeto1.setIdade(18);
console.log(objeto1);

objeto1.setNomeCompleto("Sofia Laura");
console.log(objeto1);

let objeto2 = new Pessoa("Ricardo", "Rubens", 42);
console.log(objeto2);

const mediaDeIdades = objeto1.getRetornaMedia();
console.log(mediaDeIdades);

const listaDePessoas = objeto1.getRetornaLista();
console.log(listaDePessoas);
