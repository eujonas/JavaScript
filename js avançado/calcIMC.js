/* 
usar no index.html
<form onsubmit="return calcular(event)">
        <label>Digite seu peso:</label> <br>
        <input type="text" class="peso" id="peso" placeholder="Exemplo: 63"> <br><br>
        <label>Digite sua altura:</label> <br>
        <input type="text" class="altura" id="altura" placeholder="Exemplo: 1.69"> <br><br>
        <input type="submit" value="Calcular IMC">
    </form>
    <div id="resultado"></div>
*/

var peso, altura, imc, resultado;

function calcular(event){
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura*altura);

    resultado = document.getElementById('resultado');
    if(imc<17){
        resultado.innerHTML = "<br>Seu IMC: " + imc.toFixed(2) + "<br>Você está muito abaixo do peso. Cuidado!!!";
    }
    else if(imc>=17 && imc<=18.49){    
        resultado.innerHTML = "<br>Seu IMC: " + imc.toFixed(2) + "<br>Você está abaixo do peso...";
    }
    else if(imc>=18.5 && imc<=24.99){
        resultado.innerHTML = "<br>Seu IMC: " + imc.toFixed(2) + "<br>Parabéns, você está com o peso ideal...";
    }
    else if(imc>=25 && imc<=29.99){
        resultado.innerHTML = "<br>Seu IMC: " + imc.toFixed(2) + "<br>Cuidado, você está acima do peso.";
    }
    else if(imc>=30){
        resultado.innerHTML = "<br>Seu IMC: " + imc.toFixed(2) + "<br>Cuidado, você está com obesidade.";
    }
    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value = '';

}