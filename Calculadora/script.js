const display = document.getElementById("display");
const botoes = document.querySelectorAll(".botoes button");
const limpar = document.getElementById("limpar");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent;

    if (valor === "=") {
      try {
        display.value = eval(display.value); // calcula
      } catch {
        display.value = "Erro";
      }
    } else if (valor === "C") {
      display.value = "";
    } else {
      display.value += valor;
    }
  });
});
