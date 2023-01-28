let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listarTarefas"))||[];// ja se inicia com a lista vazia ou busca as tarefas armazenadas no localstorage

function renderTarefas(){
    listElement.innerHTML = '';
    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}
renderTarefas();

function AddTarefas(){
    if(inputElement.value === ''){
        alert("Você precisa adicionar uma tarefa...")
        return false;
    }
    else{
        let novatarefa = inputElement.value;
        tarefas.push(novatarefa);
        inputElement.value = '';
        renderTarefas(); //após adicionar uma nova tarefa, esta funcao atualizara a pagina, e a tarefa podera ser visualizada
        salvarDados();//para que o localstorage sera salvo no cache do navegador
    }
}

buttonElement.onclick = AddTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1); //vai excluir apenas 1 item atraves do SPLICE.
    renderTarefas(); // apos excluir o item, é utilizada esta funcao para atualizar a lista de tarefas, ja com o item excluido
}

function salvarDados(){
    localStorage.setItem("@listarTarefas", JSON.stringify(tarefas));
}