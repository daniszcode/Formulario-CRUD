import {
    addTaskStorage,
    getTasksStorage,
    removeTaskStorage
} from "./repository.js";

document.querySelector("#form").addEventListener('submit', event => {
    event.preventDefault();
    saveTask();
}); // esta linha de codigo faz com que o button tipo submit rode a função saveTask(), sem necessidade do onclick (substituido pelo addeventlistener(submit))

const listElement = document.querySelector('ul'); //cria a tabela para listar os itens da lista

function saveTask() {
    const name = document.querySelector("#name").value;
    //console.log(name)
    const task = {
        name, // poderia ser usado name:name, mas como tem o nome da mesma variavel (name), pode ser usado a virgula no lugar
        done: false
    };
    addTaskStorage(task, drawList);
}

function makeItem(task) {
    const liElement = document.createElement("li");
    liElement.textContent = task.name; //elemento li recebe task.name atraves do textCOntent      
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Apagar";
    buttonElement.addEventListener("click", () => {
        removeTaskStorage(task.name, drawList);
    });
    liElement.appendChild(buttonElement);
    return liElement //retorna as li da tabela com as tarefas inseridas

}

function drawList() {
    const tasks = getTasksStorage();
    listElement.innerHTML = ""
    tasks.forEach(task => {
        listElement.appendChild(makeItem(task));
    });

}
drawList()