let segundos = 0;
let timer = null;
let ativo = false;

const tempo = document.getElementById("tempo");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const zerar = document.getElementById("zerar");

function formatarTempo(segundos) {
  const min = String(Math.floor(segundos / 60)).padStart(2, '0');
  const seg = String(segundos % 60).padStart(2, '0');
  return `${min}:${seg}`;
}

function atualizarDisplay() {
  tempo.textContent = formatarTempo(segundos);
}

iniciar.addEventListener("click", () => {
  if (!ativo) {
    ativo = true;
    timer = setInterval(() => {
      segundos++;
      atualizarDisplay();
    }, 1000);
  }
});

pausar.addEventListener("click", () => {
  clearInterval(timer);
  ativo = false;
});

zerar.addEventListener("click", () => {
  clearInterval(timer);
  segundos = 0;
  ativo = false;
  atualizarDisplay();
});
