const botao = document.getElementById("gerar");
const cor = document.getElementById("cor");

function gerarCorHex() {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

botao.addEventListener("click", () => {
  const novaCor = gerarCorHex();
  document.body.style.backgroundColor = novaCor;
  cor.textContent = novaCor;
});
