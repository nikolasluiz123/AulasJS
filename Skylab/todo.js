// array com as tarefas
todos = [
    "Item 1",
    "Item 2",
    "Item 3"
];

// cria um item para cada tarefa da lista acima
// e coloca esse item na ul do html
todos.forEach(todo => {
    var li = criarLi(todo);
    var ul = document.querySelector('ul#listaTodos');
    ul.appendChild(li);
});

function criarLi(todo){
    var li = document.createElement('li');
    li.setAttribute('class', 'item-lista-todo');
    li.appendChild(document.createTextNode(todo));
    li.appendChild(criarA());
    return li;
}

function criarA(){
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'link-excluir-todo');
    a.appendChild(document.createTextNode('Excluir'));
    return a;
}