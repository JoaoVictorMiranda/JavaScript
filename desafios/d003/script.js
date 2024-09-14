function contar() {
  // Declaração das variáveis 'num1', 'num2' e 'passo', capturando os valores dos inputs HTML e convertendo-os para números
  let num1 = Number(document.querySelector("input#num1").value);
  let num2 = Number(document.querySelector("input#num2").value);
  let passo = Number(document.querySelector("input#passo").value);
  
  // Variável 'res' para armazenar a div onde o resultado será exibido
  let res = document.querySelector("div#res");

  // Verificação para garantir que todos os inputs tenham valores. Se algum campo estiver vazio, mostra um alerta
  if (num1.length == 0 || num2.length == 0 || passo.length == 0) {
    alert("[ERRO] Dados faltando coloque corretamente");
  } else {
    // Variável 'p' recebe o valor de 'passo'
    let p = passo;

    // Se o valor de 'p' for menor ou igual a 0, o passo é invalidado e substituído por 1
    if (p <= 0) {
      alert("[ERRO] Passo invalido! Consideramos passo 1");
      p = 1;
    }

    // Limpa a div de resultados e inicia a string de contagem
    res.innerHTML = "Contagem: ";

    // Se 'num1' for menor que 'num2', faz uma contagem crescente
    if (num1 < num2) {
      for (let c = num1; c <= num2; c += p) {
        // Adiciona cada número da contagem crescente ao conteúdo da div
        res.innerHTML += ` ${c} \u{1f449} `; // '\u{1f449}' é um emoji de dedo apontando
      }
    // Se 'num1' for maior que 'num2', faz uma contagem decrescente
    } else if (num1 > num2) {
      for (let c = num1; c >= num2; c -= p) {
        // Adiciona cada número da contagem decrescente ao conteúdo da div
        res.innerHTML += ` ${c} \u{1f449} `;
      }
    }

    // Adiciona o emoji de bandeira para finalizar a contagem
    res.innerHTML += ` \u{1F3C1} `;
  }
}
