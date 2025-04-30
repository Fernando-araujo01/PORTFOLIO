  const element = document.getElementById("escrita");
  const text = "Olá, sou Fernando Araújo";
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150); // velocidade da digitação
    }
  }

  window.addEventListener("load", type); // inicia ao carregar a página

