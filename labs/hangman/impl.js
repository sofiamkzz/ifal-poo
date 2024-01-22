const prompt = require("prompt-sync")();
const {Forca} = require("./classes");
const {Jogador} = require("./classes");

const chutes = new Jogador();
const gerador = new Forca();

const palavra = gerador.gerarPalavra();
const letras = palavra.split("");

let acertos = chutes.getRetornaAcertos();
let erros =  chutes.getRetornaErros();

let tentativas = 6;
let acabou = false;

while (!acabou) {
  let chute = prompt("Digite uma letra: ").toLowerCase();

  if (letras.includes(chute) && !acertos.includes(chute)) {
    chutes.adicionarAcertos(chute);
    gerador.arrayPalavra(chute);
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
    console.log("Você perdeu! As suas tentativas acabaram! A palavra era ", palavra, ".");
  } else if (gerador.verificarPalavra() === palavra) {
    acabou = true;
    console.log("Parabéns! Você venceu!")
  } else {
    console.log("Você tem ", tentativas, " tentativas restantes!");
  }
}

console.log("Você acertou: ", acertos);
console.log("Você errou: ", erros);
