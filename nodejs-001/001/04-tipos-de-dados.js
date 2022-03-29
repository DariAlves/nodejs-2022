// Tipos de dados

const nome = '"Node.js"';
const numero = 50;
const numeroFloat = 50.5;
const numeroBigInt = 123n;
const booleano = true;
let indefinido;
const nulo = null;
const objeto = {};
const funcao = () => {};

console.log(`A variável nome é do tipo ${typeof nome}`);
console.log(`A variável numero é do tipo ${typeof numero}`);
console.log(`A variável numeroFloat é do tipo ${typeof numeroFloat}`);
console.log(`A variável numeroBigInt é do tipo ${typeof numeroBigInt}`);
console.log(`A variável booleano é do tipo ${typeof booleano}`);
console.log(`A variável indefinido é do tipo ${typeof indefinido}`);
console.log(`A variável nulo é do tipo ${typeof nulo}`);
console.log(`A variável objeto é do tipo ${typeof objeto}`);
console.log(`A variável funcao é do tipo ${typeof funcao}`);

/*
    Os tipos de dados null e undefined não têm métodos.
*/
