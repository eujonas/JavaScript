function pedir() {
    var valor = prompt("Digite um valor de 1 a 4")
    switch (Number(valor)) {
        case 1: alert("Voce escolheu 1 - Sorvete"); break;
        case 2: alert("Voce escolheu 2 - Açaí"); break;
        case 3: alert("Voce escolheu 3 - Pizza"); break;
        case 4: alert("Voce chamou o atendente..."); break;
        default: alert("Ops..."); break;
    }
}