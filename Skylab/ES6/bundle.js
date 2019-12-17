"use strict";

var usuario = {
  nome: 'Níkolas',
  idade: 19,
  endereco: {
    cidade: 'Blumenau',
    estado: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostrarNome(usuario);
