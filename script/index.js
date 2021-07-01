import { addTaskStorage, getTasksStorage } from "./repository.js";

document.querySelector("#form").addEventListener('submit', event => {
    event.preventDefault();
    saveTask();
}); // esta linha de codigo faz com que o button tipo submit rode a função saveTask(), sem necessidade do onclick (substituido pelo addeventlistener(submit))

const listElement = document.querySelector('ul'); //cria a tabela para listar os itens da lista
   
function saveTask(){
        const name = document.querySelector("#name").value;
        //console.log(name)
        const task = {
            name, // poderia ser usado name:name, mas como tem o nome da mesma variavel (name), pode ser usado a virgula no lugar
            done: false
        };
        addTaskStorage(task, drawList);
    }
    
    function makeItem(item) {
        return `
            <li> ${item.name}</li>
        `

    }
    function drawList() {
        const tasks = getTasksStorage();
        let item = '';
        tasks.forEach(task => {
            item += makeItem(task);
        });
        listElement.innerHTML = item
        //console.log(item)
    }
    drawList()