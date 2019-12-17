class List {
    constructor(){
        this.data = [];
    }

    add(d){
        this.data.push(d);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();
        this.usuario = 'níkolas';
    }
   
    mostrarUsuario(){
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function (){
    MinhaLista.add('Novo Todo');
};

MinhaLista.mostrarUsuario();