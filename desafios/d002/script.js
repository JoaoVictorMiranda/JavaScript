function verificar() {
  const year = new Date();
  const ano = year.getFullYear();
  let fano = document.querySelector("input#txtano");
  let res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] invalido preencha os dados corretamente ");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        //Criança
        img.setAttribute("src", "assets/crianca-homem.png");
      } else if (idade <= 21) {
        //Jovem
        img.setAttribute("src", "assets/jovem-homem.png");
      } else if (idade <= 61) {
        //adulto
        img.setAttribute("src", "assets/adulto-homem.png");
      } else {
        //Idoso
        img.setAttribute("src", "assets/idoso-homem.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        //Criança
        img.setAttribute("src", "assets/crianca-mulher.png");
      } else if (idade <= 21) {
        //Jovem]
        img.setAttribute("src", "assets/jovem-mulher.png");
      } else if (idade <= 61) {
        //Adulto
        img.setAttribute("src", "assets/adulto-mulher.png");
      } else {
        //idoso
        img.setAttribute("src", "assets/idoso-mulher.png");
      }
    }
    res.innerHTML = `Você é ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
