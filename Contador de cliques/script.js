let contador = 0;

const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");
const contadorTexto = document.getElementById("contador");

botao.addEventListener("click", function () {
  contador++;
  contadorTexto.textContent = contador;
});

resetar.addEventListener("click", function () {
  contador = 0;
  contadorTexto.textContent = contador;
});
