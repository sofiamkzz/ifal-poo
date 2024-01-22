class Jogador {
  constructor() {
    this._arrayAcertos = [];
    this._arrayErros = [];
  }

  adicionarAcertos(letter) {
    this._arrayAcertos.push(letter);
  }

  getRetornaAcertos() {
    return this._arrayAcertos;
  }

  adicionarErros(letter) {
    this._arrayErros.push(letter);
  }

  getRetornaErros() {
    return this._arrayErros;
  }
}

class Forca {
  constructor() {
    this._palavrasSelecionadas = ["abacaxi", "banana", "melancia", "laranja", "manga", "morango", "uva", "abacate", "amora", "caju", "damasco", "goiaba", "jabuticaba", "kiwi"];
    this._palavraSorteada = "";
    this._mostrarPalavra;
  }

  gerarPalavra() {
    this._palavraSorteada = this._palavrasSelecionadas[Math.floor(Math.random() * this._palavrasSelecionadas.length)];
    return this._palavraSorteada;
  }

  arrayPalavra(chute) {
    this._mostrarPalavra = this._palavraSorteada.split('').map(letra => chutes.getRetornaAcertos().includes(letra) ? letra : '_');
    console.log(this._mostrarPalavra);
  }

  verificarPalavra() {
    let palavraFinal = "";
    for (let i = 0; i < this._mostrarPalavra.length; i++) {
      palavraFinal += this._mostrarPalavra[i];  
    }
    return palavraFinal;
  }
}

exports.Forca = Forca;
exports.Jogador = Jogador;
