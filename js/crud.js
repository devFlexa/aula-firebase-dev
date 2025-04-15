import { db } from './firebase-config.js';
import {
  ref,
  set,
  push,
  get,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const usuariosRef = ref(db, 'usuarios');

function adicionarUsuario(nome, idade) {
  const novoRef = push(usuariosRef);
  return set(novoRef, { nome, idade });
}

function lerUsuarios(callback) {
  onValue(usuariosRef, (snapshot) => {
    const dados = snapshot.val();
    callback(dados);
  });
}

function atualizarUsuario(id, nome, idade) {
  return update(ref(db, `usuarios/${id}`), { nome, idade });
}

function deletarUsuario(id) {
  return remove(ref(db, `usuarios/${id}`));
}

export { adicionarUsuario, lerUsuarios, atualizarUsuario, deletarUsuario };
