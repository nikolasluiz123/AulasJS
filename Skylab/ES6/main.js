const usuario = {
    nome: 'Níkolas',
    idade: 19,
    endereco: {
        cidade: 'Blumenau',
        estado: 'SC'
    }
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarNome({ nome }){
    console.log(nome);
}

mostrarNome(usuario);