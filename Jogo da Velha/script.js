const celulas = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");
const reiniciar = document.getElementById("reiniciar");

let jogadorAtual = "X";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogoAtivo = true;

const combinacoesVitoria = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6]             // diagonais
];

function checarVencedor() {
  for (let combinacao of combinacoesVitoria) {
    const [a, b, c] = combinacao;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      mensagem.textContent = `Jogador ${tabuleiro[a]} venceu!`;
      jogoAtivo = false;
      return;
    }
  }

  if (!tabuleiro.includes("")) {
    mensagem.textContent = "Empate!";
    jogoAtivo = false;
  }
}

function clicarCelula(e) {
  const index = e.target.dataset.index;

  if (tabuleiro[index] === "" && jogoAtivo) {
    tabuleiro[index] = jogadorAtual;
    e.target.textContent = jogadorAtual;

    checarVencedor();

    if (jogoAtivo) {
      jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      mensagem.textContent = `Vez do jogador ${jogadorAtual}`;
    }
  }
}

celulas.forEach(celula => celula.addEventListener("click", clicarCelula));

reiniciar.addEventListener("click", () => {
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  jogoAtivo = true;
  jogadorAtual = "X";
  mensagem.textContent = "";
  celulas.forEach(c => c.textContent = "");
});
