class Produto {
    constructor(nome, preco,quantidade) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    setNome(novoNome) {
        this._nome = novoNome;
    }

    setPreco(novoPreco) {
        this._preco = novoPreco;
    }

    setQuantidade(novaQuantidade) {
        this._quantidade = novaQuantidade;
    }

    getNome() {
        return this._nome;
    }

    getPreco() {
        return this._preco;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getInfo() {
        return `Nome: ${this._nome} \nPreço: ${this._preco} \nQuantidade: ${this._quantidade}`;
    }

    calcularValorTotal() {
        return this._preco * this._quantidade;
    }
}

exports.Produto = Produto;
