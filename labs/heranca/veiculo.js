class Veiculo {
    constructor (marca, ano) {
        this._marca = marca;
        this._ano = ano;
    }

    descricao() {
        return this._marca + " " + this._ano;
    }

}

class Carro extends Veiculo {
    constructor(marca, ano, modelo, numeroDePortas) {
        super(marca, ano);
        this._modelo = modelo;
        this._numeroDePortas = numeroDePortas;
        }

    descricao() {
        return this._marca + " " + this._ano + " " + this._modelo + " " + this._numeroDePortas;
    }

}

const veiculo1 = new Veiculo("Volkswagen", 2021);
let descricao1 = veiculo1.descricao();
console.log(descricao1);

const veiculo2 = new Carro("Audi", 2007, "A5", 4);
let descricao2 = veiculo2.descricao();
console.log(descricao2);
