// array com as tarefas
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderizarTodos(){
    todos.forEach(todo => { criarTodo(todo); });
}

renderizarTodos();

function criarTodo(todo){
    var li = criarLi(todo);
    var ul = document.querySelector('ul#listaTodos');
    ul.appendChild(li);
}

function criarLi(todo){
    var li = document.createElement('li');
    li.setAttribute('class', 'item-lista-todo');
    li.appendChild(document.createTextNode(todo));
    li.appendChild(criarA(todo));
    return li;
}

function criarA(todo){
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'link-excluir-todo');
    a.setAttribute('onClick', `excluirTodo(this, ${todos.indexOf(todo)});`);
    a.appendChild(document.createTextNode('Excluir'));
    return a;
}

function excluirTodo(element, posicao){
    element.parentNode.remove();    
    todos.splice(posicao, 1);
    saveStorage();
}

function adicionarTodo(){
    var input = document.querySelector('#todo');
    var text = input.value;
    input.value = '';
    todos.push(text);

    criarTodo(todos[todos.length - 1]);
    saveStorage();
}

function adicionarTodoOnKeyPress(event){
    var keyCode = event.keyCode;
    console.log(keyCode);

    if(keyCode === 13){
        adicionarTodo();
    }
}

function saveStorage(){
    var json = JSON.stringify(todos);
    localStorage.setItem('list_todos', json);
}