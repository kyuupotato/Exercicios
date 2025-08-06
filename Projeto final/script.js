// Trocar Tema
const temaBtn = document.getElementById("tema-btn");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  temaBtn.textContent = document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// Gerador de Cor
const corDisplay = document.getElementById("cor-display");
document.getElementById("gerar-cor").addEventListener("click", () => {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = cor;
  corDisplay.textContent = cor;
});

// Verificador de Palíndromos
function limparTexto(txt) {
  return txt
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

document.getElementById("verificar-palindromo").addEventListener("click", () => {
  const original = document.getElementById("entrada-palindromo").value;
  const limpo = limparTexto(original);
  const invertido = limpo.split("").reverse().join("");
  const res = document.getElementById("resultado-palindromo");

  if (limpo === "") {
    res.textContent = "Digite algo!";
  } else if (limpo === invertido) {
    res.textContent = `"${original}" é um palíndromo ✅`;
  } else {
    res.textContent = `"${original}" não é um palíndromo ❌`;
  }
});

// Contador de Cliques
let contagem = 0;
const contadorValor = document.getElementById("contador-valor");
document.getElementById("contador-btn").addEventListener("click", () => {
  contagem++;
  contadorValor.textContent = contagem;
});
document.getElementById("resetar-contador").addEventListener("click", () => {
  contagem = 0;
  contadorValor.textContent = contagem;
});

// Cronômetro
let segundos = 0;
let ativo = false;
let intervalo = null;

const cronometroDisplay = document.getElementById("cronometro-display");

function formatarTempo(s) {
  const min = String(Math.floor(s / 60)).padStart(2, '0');
  const seg = String(s % 60).padStart(2, '0');
  return `${min}:${seg}`;
}

function atualizarCronometro() {
  cronometroDisplay.textContent = formatarTempo(segundos);
}

document.getElementById("iniciar").addEventListener("click", () => {
  if (!ativo) {
    ativo = true;
    intervalo = setInterval(() => {
      segundos++;
      atualizarCronometro();
    }, 1000);
  }
});

document.getElementById("pausar").addEventListener("click", () => {
  ativo = false;
  clearInterval(intervalo);
});

document.getElementById("zerar").addEventListener("click", () => {
  ativo = false;
  clearInterval(intervalo);
  segundos = 0;
  atualizarCronometro();
});
