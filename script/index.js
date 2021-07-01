document.querySelector("#form").addEventListener('submit', event => {
    event.preventDefault();
    saveTask();
}); // esta linha de codigo faz com que o button tipo submit rode a função saveTask(), sem necessidade do onclick (substituido pelo addeventlistener(submit))

const listElement = document.querySelector('ul'); // tag ul será usada para tabelar a lista no HTML


function saveTask(){
    const name = document.querySelector("#name").value;
    //console.log(name)
    const task = {
        name, // poderia ser usado name:name, mas como tem o nome da mesma variavel (name), pode ser usado a virgula no lugar
        done: false
    };
    addTaskStorage(task);
}

function addTaskStorage(task) {
    //console.log(taksString)
    const tasks = getTasksStorage(task);
    const tasksWithNewItem = [...tasks, task] // tasksWithNewItem recebe um array contendo todas as tasks já convertidas em objeto e listadas dentro de um array (...tasks) && a ultima task adicionada na lista dentro desse mesmo array
    const tasksString = JSON.stringify(tasksWithNewItem); // transforma o array/objeto em string para ser lida no localStorage(só recebe String) e manipulada para aparecer na tela
    console.log(tasksString)
    localStorage.setItem("list", tasksString);
}

function getTasksStorage() {
    const tasksString = localStorage.getItem("list"); // pegar/capturar lista inteira "list"
    const tasks = JSON.parse(tasksString); // converte a strig em objeto para ser usada no Javascript
    if (!tasks) {
        return [] //Se não houver nenhuma task listada, retorne um array vazio, para salvar e criar a lista de objetos
    }
    return tasks;
}


function makeItem(task) {
    return `
            <li>${task.name}</li>
    `

}
function drawList() {
    const tasks = getTasksStorage();
    let item = '';
    tasks.forEach(task => {
        item += makeItem(task);
    });
    
    console.log(item)
}
drawList()
