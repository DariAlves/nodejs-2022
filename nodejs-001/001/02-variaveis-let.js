// Variáveis - Let

console.log(`01-não faz hoisting\n`);
// console.log(`01-hoisting: ${raca}\n`); ReferenceError: Cannot access 'raca' before initialization

let raca = 'Saiyajin';

console.log(`02-declaração e atribuição: ${raca}\n`);

function dbz() {
  let raca = 'Namekuseijin';

  console.log(`03-escopo de função: ${raca}\n`);
}

dbz();

console.log(`04-valor permanece inalterado: ${raca}\n`);

{
  // Respeira o escopo de bloco
  let raca = 'Majin';
  console.log(`05-escopo de bloco: ${raca}\n`);
}
 
// Valor permanece o mesmo do inicial, porque não foi alterado
console.log(`06-Não acessível fora do bloco: ${raca}\n`);
