
var area = document.getElementById('area')

function entrar(){
    var nome = prompt("Qual o seu nome?");

    if(nome === '' || nome === null){
        area.innerHTML = "Clique no botão novamente...";
        alert("Opsss..Tente novamente!");
    }
    else{
        area.innerHTML = "Bem vindo(a) " + nome + " ";
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);  
    }
}

function sair(){
    alert("Até mais...");
    area.innerHTML = "Você saiu!!!";
}

