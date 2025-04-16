const pessoa = {
  nome: "Lucas",
  idade: 25,
  cidade: "São Paulo",
};

// Sem desestruturação:
const nome1 = pessoa.nome;
const idade1 = pessoa.idade;
console.log(nome1, idade1);

// Com desestruturação:
const { nome, idade } = pessoa;
console.log(nome, idade);

//saída Lucas 25

// -----------------------------------------------------------

const numeros = [10, 20, 30];

// Sem desestruturação:
const a1 = numeros[0];
const b1 = numeros[1];

// Com desestruturação:
const [a, b] = numeros;
console.log(a, b);

// -----------------------------------------------------------

function mostrarInfo({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos.`);
}

const usuario = {
  nome: "Amanda",
  idade: 22,
};

mostrarInfo(usuario);
