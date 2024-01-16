const {Produto} = require("./produto");

// Objetos
const celular = new Produto("Samsung Galaxy S22 Ultra", 8000, 17);
const chocolate = new Produto("KitKat", 5, 204);

// Método para calcular valor total dos produtos 
celular.calcularValorTotal();
chocolate.calcularValorTotal();

// Método que atualiza a quantidade 
celular.setQuantidade(27);
chocolate.setQuantidade(645);
