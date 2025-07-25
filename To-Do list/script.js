const input = document.getElementById("tarefa-input");
const botao = document.getElementById("adicionar-btn");
const lista = document.getElementById("lista-tarefas");

botao.addEventListener("click", function () {
  const texto = input.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    // Marcar como concluída ao clicar
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Remover com clique duplo
    li.addEventListener("dblclick", function () {
      li.remove();
    });

    lista.appendChild(li);
    input.value = "";
    input.focus();
  }
});
