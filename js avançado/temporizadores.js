function acao(){
    document.write("Funcionando... </br>")
}

/*
setInterval(acao, 2000); executa a cada 2 segundos (sem parar)
setTimeout(acao, 2000); executa apenas uma vez em 2 segundos (e para)
*/

/*setInterval(()=>{
    document.write("Funcionando... </br>");
}, 2000)
*/
setTimeout(()=>{
    document.write("Funcionando... </br>");
}, 2000)
