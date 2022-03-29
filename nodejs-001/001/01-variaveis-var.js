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
  var raca = 'Majin';
  console.log(`05-redeclaração: ${raca}\n`);
}

raca = 'Saibaiman';

console.log(`06-reatribuição: ${raca}\n`);
