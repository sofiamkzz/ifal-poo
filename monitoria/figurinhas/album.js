class Album {
      static totalFigurinhas = 0;

    constructor(nome, maximo) {
       this._nome = nome;
       this._numeroTotal = 0;
       this._figurinhas = [];
       this._maximoFigurinhas = maximo;
    }

    verificarFigurinha(numero) {
       if(this._figurinhas.includes(numero)) {
        return true;
       } else {
        return false;
       }
    }

    adicionarFigurinha(numero) {
        if (this._figurinhas.length >= this._maximoFigurinhas) {
         console.log(`Não é possível adicionar mais figurinhas! O limite de ${this._maximoFigurinhas} figurinhas já foi excedido.`);
         return false;
        }

        let verifica = this.verificarFigurinha(numero);

        if (verifica === false) {
            this._figurinhas.push(numero);
            this._numeroTotal += 1;
            Album.totalFigurinhas += 1;
        } else {
            console.log(`A figurinha de numeração ${numero} já está no álbum!`);
        }
    }
  
    getTotalFigurinhas() {
        return Album.totalFigurinhas;
    }

}

exports.Album = Album;
