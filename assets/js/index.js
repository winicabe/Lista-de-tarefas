const Storage = {
    get(){
        return JSON.parse(localStorage.getItem("winicabe-ToDo:Tasks")) || []
    },
    set(transactions){
        localStorage.setItem("winicabe-ToDo:Tasks", JSON.stringify(transactions))
    }
}
const Task = {
    tasks:Storage.get(),
    addTask(task_name){
        this.tasks.push({name:task_name});
        App.reload()
    },
    deleteTask(index){
        this.tasks.splice(index, 1);
        App.reload()
    },
    getTaskName(){
        task_name = document.getElementById("taskname").value
        return task_name
    }
}
const DOM = {
    container : document.querySelector("#task-list"),
    addTask(task_name, index) {
        const list_box = document.createElement("div")
        list_box.dataset.index = index;
        list_box.innerHTML = this.buildHTML(task_name.name, index);
        this.container.appendChild(list_box)
    },
    buildHTML(task_name, index){
        html = `
        <h2 class="title-task">${task_name}</h2>
        <button onclick="Task.deleteTask(${index})" class="delete">Delete</button>`;
        return html;
    },
    inputUser(){
        return user_input = document.getElementById("taskname").value;
    },
    clearHTML(){
        this.container.innerHTML = ""
    }
}
const App = {
    run(){
        Task.tasks.forEach((name, index) => {
            DOM.addTask(name, index);
        });
        console.log(Task.tasks)
        Storage.set(Task.tasks)
    },
    reload(){
        DOM.clearHTML()
        this.run()
    }
}
App.run()
// function addTask(user_input) {
//     //nome da tarefa.
//     const layout = document.createElement("div");
//     const task = document.createElement("h1");
//     const bt_delete = document.createElement("button");
//     const task_name = document.createTextNode(user_input.value);
//     //const line = document.createElement("hr");
//     bt_delete.innerHTML = "delete"
//     //adicionando componentes
//     layout.appendChild(task);
//     layout.appendChild(bt_delete);
//     task.appendChild(task_name);
//     document.body.appendChild(layout);
//     //layout.appendChild(line)
//     //removendo tarefas
//     bt_delete.onclick = function() {
//         layout.remove();
//     }
    
// };
// adicionar = document.getElementById("addbutton")
// adicionar.onclick = function() {addTask(user_input);};