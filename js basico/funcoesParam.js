function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) /2;

    if(media >= 7){
        console.log("Aluno aprovado com média: " + media);
    }
    else if(media < 7){
        console.log("Aluno de recuperação com média: " + media);
    }
}

function aluno(nome, curso){
    var mensagem = "Olá, " + nome + "! \nSeja muito bem vindo(a) ao curso de " + curso;
    console.log(mensagem);
}