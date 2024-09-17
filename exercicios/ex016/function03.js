//Função recursiva que se chama dentro dela mesma para resolver algum problema
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
console.log(fatorial(5));
