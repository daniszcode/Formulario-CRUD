document.querySelector("#form").addEventListener('submit', event => {
event.preventDefault();
saveTask();
}); // esta linha de codigo faz com que o button tipo submit rode a função saveTask(), sem necessidade do onclick (substituido pelo addeventlistener(submit))

function saveTask(){
    const name = document.querySelector("#name").value;
    //console.log(name)
    const task = {
        name, // poderia ser usado name:name, mas como tem o nome da mesma variavel (name), pode ser usado a virgula no lugar
        done: false
    };
    const taksString = JSON.stringify(task); // transforma o array/objeto em string
    //console.log(taksString)
    localStorage.setItem("list", taksString)
}



