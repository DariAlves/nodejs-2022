// Variáveis - Var

console.log(`01-hoisting: ${raca}\n`);

var raca = 'Saiyajin';

console.log(`02-declaração e atribuição: ${raca}\n`);

function dbz() {
  var raca = 'Namekuseijin';

  console.log(`03-escopo de função: ${raca}\n`);
}

dbz();

console.log(`04-valor permanece inalterado: ${raca}\n`);

{
  // Redeclaração e reatribuição de variável
  var raca = 'Majin';
  console.log(`05-Não tem escopo de bloco: ${raca}\n`);
}

console.log(`06-Acessível fora do bloco: ${raca}\n`);
