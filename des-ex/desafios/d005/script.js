let valores = []; // Array para armazenar os valores

function adicionar() {
  let num = Number(document.querySelector("input#num").value); // Converte o valor para número
  let sel = document.querySelector("select#sel"); // Seleciona o select

  if (num < 1 || num > 100 || isNaN(num)) {
    // Verifica se é um número entre 1 e 100
    alert("[ERRO] Digite um número válido entre 1 e 100");
  } else {
    // Adiciona o valor ao array se não estiver presente
    if (!valores.includes(num)) {
      valores.push(num); // Adiciona o valor ao array

      // Adiciona o novo valor ao select
      let item = document.createElement("option");
      item.text = `Valor ${num}`;
      sel.appendChild(item);
    } else {
      alert("[ERRO] Valor já adicionado");
    }

    document.querySelector("input#num").value = ""; // Limpa o input
    document.querySelector("input#num").focus(); // Foca no input novamente
  }
}

function finalizar() {
  if (valores.length == 0) {
    alert("Digite numeros antes de tentar");
    return;
  }

  let res = document.querySelector("div#res");

  res.innerHTML = `Ao todo temos ${valores.length} numeros cadastrados`;

  let maior = valores.sort((a, b) => a - b);
  let maiorNumero = maior[maior.length - 1];

  res.innerHTML += `</br> O maior numero encontrado foi: ${maiorNumero}`;

  let soma = 0;

  for (let i = 0; i < maior.length; i++) {
    // Loop por todos os números do array
    soma += maior[i]; // Adiciona cada número à soma
  }
  res.innerHTML += `</br> A soma dos numeros cadastrados foi:  ${soma}`;

  let media = soma / maior.length;
  res.innerHTML += `</br> A media é ${media}`;
}

function limpar() {
  console.log(valores);
  valores = "";
  res.innerHTML = "";
}
