function load() {
  // Obtém a data e hora atuais
  const date = new Date();

  // Obtém a hora e os minutos da data atual
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0"); // Converte os minutos para string e adiciona zero à esquerda se necessário

  // Seleciona o elemento que exibirá a hora
  const master = document.querySelector("div#horario");

  // Seleciona o elemento da imagem
  const img = document.querySelector("img#img");

  // Atualiza o conteúdo do elemento 'master' para mostrar a hora atual
  master.innerHTML = `<h1>Agora são ${hour}:${minute} Horas </h1>`;

  // Altera o plano de fundo e a imagem com base na hora do dia
  if (hour >= 0 && hour < 12) {
    // Manhã
    document.body.style.background = "rgb(175, 218, 255)";
    img.src = "images/manha-pq.png";
  } else if (hour < 18) {
    // Tarde
    document.body.style.background = "rgb(231, 170, 0)";
    img.src = "images/tarde-pq.png";
  } else {
    // Noite
    document.body.style.background = "rgb(0, 40, 75)";
    img.src = "images/noite-pq.png";
  }
}
