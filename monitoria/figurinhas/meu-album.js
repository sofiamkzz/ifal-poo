const {Album} = require("./album");

let obj1 = new Album("Copa do Mundo - 2010", 10);
obj1.adicionarFigurinha(1);
obj1.adicionarFigurinha(2);
obj1.adicionarFigurinha(3);
obj1.adicionarFigurinha(4);
obj1.adicionarFigurinha(5);
obj1.adicionarFigurinha(6);
obj1.adicionarFigurinha(7);
obj1.adicionarFigurinha(8);
obj1.adicionarFigurinha(9);
obj1.adicionarFigurinha(10);
console.log(obj1);
let verificar1 = obj1.verificarFigurinha(1);
console.log("1 está no álbum: ", verificar1);
let verificar54 = obj1.verificarFigurinha(54); 
console.log("54 está no álbum: ", verificar54);

let obj2 = new Album("Copa do Mundo - 2018", 20);
obj2.adicionarFigurinha(6);
obj2.verificarFigurinha(78);
console.log(obj2);
let verificar6 = obj2.verificarFigurinha(6);
console.log("6 está no álbum: ", verificar6);
let verificar900 = obj2.verificarFigurinha(900); 
console.log("900 está no álbum: ", verificar900);

let obj3 = new Album("Copa do Mundo - 2022", 3);
obj3.adicionarFigurinha(65);
obj3.adicionarFigurinha(89);
obj3.adicionarFigurinha(45);
console.log(obj3);
let verificar90 = obj3.verificarFigurinha(90);
console.log("90 está no álbum: ", verificar90);
let verificar65 = obj3.verificarFigurinha(65); 
console.log("65 está no álbum: ", verificar65);
obj3.adicionarFigurinha(43);

let x = obj1.getTotalFigurinhas();
console.log(`\n Levando em consideração todos os álbuns, há ${x} figurinhas!\n`);
