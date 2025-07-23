function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  const horaAtual = `${horas}:${minutos}:${segundos}`;
  document.getElementById('time').textContent = horaAtual;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // mostra a hora imediatamente ao carregar
