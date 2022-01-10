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
        task_name = document.getElementById("task-name").value
        return task_name
    }
}
const DOM = {
    container : document.querySelector("#task-list"),
    addTask(task_name, index) {
        const list_box = document.createElement("div")
        //list_box.dataset.index = index;
        list_box.innerHTML = this.buildHTML(task_name.name, index);
        this.container.appendChild(list_box)
        this.clearInput()
    },
    buildHTML(task_name, index){
        html = `
        <h2 class="title-task">${task_name}</h2>
        <img onclick="Task.deleteTask(${index})" class="delete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/>`;
        return html;
    },
    inputUser(){
        return user_input = document.getElementById("task-name").value;
    },
    clearHTML(){
        this.container.innerHTML = ""
    },
    clearInput(){
        user_input = document.getElementById("task-name").value = "";
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