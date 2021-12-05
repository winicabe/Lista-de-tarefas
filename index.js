//texto digitado pelo usuário
const user_input = document.getElementById("taskname");

function addTask(user_input) {
    //nome da tarefa.
    const layout = document.createElement("div");
    const task = document.createElement("h1");
    const bt_delete = document.createElement("button");
    const task_name = document.createTextNode(user_input.value);
    const line = document.createElement("hr");
    bt_delete.innerHTML = "delete"
    //adicionando componentes
    layout.appendChild(task);
    layout.appendChild(bt_delete);
    task.appendChild(task_name);
    document.body.appendChild(layout);
    layout.appendChild(line)
    //removendo tarefas
    bt_delete.onclick = function() {
        layout.remove();
    }
    
};
adicionar = document.getElementById("addbutton")
adicionar.onclick = function() {addTask(user_input);};