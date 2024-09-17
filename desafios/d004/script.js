function tabuada() {
  // Obtém o valor do campo de entrada com id "numero" e armazena na variável 'num'
  let num = document.getElementById("numero").value;

  // Seleciona o elemento <select> com id "seltab" e armazena na variável 'tab'
  let tab = document.querySelector("select#seltab");

  // Verifica se o campo 'num' está vazio
  if (num.length == 0) {
    // Exibe um alerta caso o campo esteja vazio
    alert("[ERRO]. Digite um valor para funcionar");
  } else {
    // Converte o valor de 'num' para um número e armazena na variável 'n'
    let n = Number(num);

    // Inicia um contador 'c' com valor zero
    let c = 0;

    // Limpa o conteúdo existente do <select> antes de gerar a tabuada
    tab.innerHTML = "";

    // Executa um loop enquanto 'c' for menor ou igual a 10
    while (c <= 10) {
      // Cria um novo elemento <option> para o select
      let item = document.createElement("option");

      // Define o texto do <option> como a multiplicação do número 'n' pelo contador 'c'
      item.text = ` ${n} x ${c} = ${n * c} `;

      // Define o valor do <option> como "tab" seguido do valor de 'c'
      tab.value = `tab${c}`;

      // Adiciona o <option> criado como filho do <select>
      tab.appendChild(item);

      // Incrementa o contador 'c' em 1
      c++;
    }
  }
}
