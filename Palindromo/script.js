const entrada = document.getElementById("entrada");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

function limparTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, ""); // Remove espaços e pontuações
}

botao.addEventListener("click", () => {
  const textoOriginal = entrada.value;
  const textoLimpo = limparTexto(textoOriginal);
  const textoInvertido = textoLimpo.split("").reverse().join("");

  if (textoLimpo === "") {
    resultado.textContent = "Digite algo para verificar.";
  } else if (textoLimpo === textoInvertido) {
    resultado.textContent = `"${textoOriginal}" é um palíndromo ✅`;
  } else {
    resultado.textContent = `"${textoOriginal}" não é um palíndromo ❌`;
  }
});
