// Importando funções do módulo `crud.js`
import {
  adicionarUsuario,
  lerUsuarios,
  atualizarUsuario,
  deletarUsuario,
} from "./crud.js";

// Selecionando elementos do formulário e da lista
const form = document.getElementById("user-form");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const lista = document.getElementById("lista-usuarios");
const cancelarBtn = document.getElementById("cancelar-edicao");

// Variáveis de controle para saber se está editando e qual ID está sendo editado
let editando = false;
let idAtual = null;

// Evento de envio do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  const nome = nomeInput.value.trim(); // Pega o nome e remove espaços extras
  const idade = Number(idadeInput.value); // Converte a idade para número

  // Validação simples dos dados
  if (!nome || isNaN(idade)) return alert("Preencha corretamente!");

  if (editando) {
    // Se estiver editando, atualiza o usuário existente
    await atualizarUsuario(idAtual, nome, idade);
    editando = false;
    idAtual = null;
    cancelarBtn.hidden = true;
  } else {
    // Caso contrário, adiciona novo usuário
    await adicionarUsuario(nome, idade);
  }

  form.reset(); // Limpa o formulário
});

// Evento do botão "Cancelar edição"
cancelarBtn.addEventListener("click", () => {
  form.reset();
  editando = false;
  idAtual = null;
  cancelarBtn.hidden = true;
});

// Lê os usuários do Firebase e exibe na tela
lerUsuarios((usuarios) => {
  lista.innerHTML = ""; // Limpa a lista antes de mostrar novamente
  if (usuarios) {
    // Converte objeto em array de pares [id, dados]
    Object.entries(usuarios).forEach(([id, { nome, idade }]) => {
      const li = document.createElement("li"); // Cria item da lista
      li.innerHTML = `
        <strong>${nome}</strong> - ${idade} anos
        <button data-id="${id}" class="editar">Editar</button>
        <button data-id="${id}" class="deletar">Deletar</button>
      `;
      lista.appendChild(li); // Adiciona item à lista
    });
  }
});

// Evento de clique nos botões de editar e deletar
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("editar")) {
    // Se clicou em "Editar"
    const id = e.target.dataset.id;
    const li = e.target.closest("li"); // Pega o <li> mais próximo
    const [nomeText, idadeText] = li.textContent.split(" - ");
    nomeInput.value = nomeText.trim();
    idadeInput.value = parseInt(idadeText);
    idAtual = id;
    editando = true;
    cancelarBtn.hidden = false;
  }

  if (e.target.classList.contains("deletar")) {
    // Se clicou em "Deletar"
    const id = e.target.dataset.id;
    if (confirm("Deseja mesmo deletar?")) {
      deletarUsuario(id);
    }
  }
});
