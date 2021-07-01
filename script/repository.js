export function getTasksStorage() {
    const tasksString = localStorage.getItem("list"); // pegar/capturar lista inteira "list"
    const tasks = JSON.parse(tasksString); // converte a strig em objeto para ser usada no Javascript
    if (!tasks) {
        return [] //Se não houver nenhuma task listada, retorne um array vazio, para salvar e criar a lista de objetos
    }
    return tasks;
}
export function addTaskStorage(task, draw) {
    //console.log(taksString)
    const tasks = getTasksStorage(task);
    const tasksWithNewItem = [...tasks, task] // tasksWithNewItem recebe um array contendo todas as tasks já convertidas em objeto e listadas dentro de um array (...tasks) && a ultima task adicionada na lista dentro desse mesmo array
    saveTaskStorage(tasksWithNewItem, draw)

}

export function removeTaskStorage(taskName, draw) {


    const tasks = getTasksStorage();     //capturar lista
    const taskToKeep = tasks.filter((task) => task.name !== taskName);     //remover o item da lista, utilizando o nome
    //console.log(taskToKeep);
    saveTaskStorage(taskToKeep, draw)

}

function saveTaskStorage(tasks, draw) {
    const tasksString = JSON.stringify(tasks); // transforma o array/objeto em string para ser lida no localStorage(só recebe String) e manipulada para aparecer na tela
    localStorage.setItem("list", tasksString);   // gravar lista alterada
    draw(); //transformou a chamada da função em um parametro, para ela rodar sem precisar ser exportada
}
