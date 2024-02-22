const prompt = require("prompt-sync")();

class Jogador {
  constructor(nome) {
    this._nome = nome;
    this._arrayAcertos = [];
    this._arrayErros = [];
  }
  
  setNome(novoNome) {
    this._nome = novoNome;
  }
  
  getNome() {
    return this._nome;
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

class Palavra {
  constructor() {
    this._palavrasSelecionadas = ["abacaxi", "banana", "melancia", "laranja", "manga", "morango", "uva", "abacate", "amora", "caju", "damasco", "goiaba", "jabuticaba", "kiwi"];
    this._palavraSorteada = "";
    this._mostrarPalavra;
  }

  gerarPalavra() {
    this._palavraSorteada = this._palavrasSelecionadas[Math.floor(Math.random() * this._palavrasSelecionadas.length)];
    return this._palavraSorteada;
  }

  arrayPalavra() {
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

const chutes = new Jogador("RR");
const gerador = new Palavra();

const palavra = gerador.gerarPalavra();
const letras = palavra.split("");

let acertos = chutes.getRetornaAcertos();
let erros =  chutes.getRetornaErros();

let tentativas = 6;
let acabou = false;

console.log("Bem vindo ao jogo da forca! \nO seu objetivo é adivinhar a palavra secreta. \nVocê tem 6 tentativas para acertar.\n");

while (!acabou) {
  gerador.arrayPalavra();
  
  let chute = prompt("Digite uma letra: ").toLowerCase();

  if (letras.includes(chute) && !acertos.includes(chute)) {
    chutes.adicionarAcertos(chute);
    gerador.arrayPalavra();
    console.log("Acertou!");
  } else if (acertos.includes(chute) || erros.includes(chute)) {
    console.log("Esse chute já foi dado!");	
  } else if (!chute.match(/^[a-z]$/)) {
    console.log("Caractere inválido! Digite apenas letras!");
  } else {
    chutes.adicionarErros(chute);
    tentativas -= 1;
    console.log("Errou!");
  }

  if (tentativas == 0) {
    acabou = true;
    console.log("Você perdeu! As suas tentativas acabaram! A palavra era " + palavra +".");
  } else if (gerador.verificarPalavra() === palavra) {
    acabou = true;
    console.log(`Parabéns, ${chutes.getNome()}! Você venceu!`);
  } else {
    console.log("Você tem " + tentativas + " tentativas restantes!");
  }
}

console.log("Você acertou: ", acertos);
console.log("Você errou: ", erros);
