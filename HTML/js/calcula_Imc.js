var titulo = document.querySelector(".titulo");
titulo.textContent = ("Aparecida Nutricionista");
//selecionar todos da class
var pacientes = document.querySelectorAll(".paciente");

//calculos
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    //ou = ||
    if(!pesoValido){ // ! negativo
        console.log('Peso inválido');
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        //puca com CSS]
        paciente.classList.add("paciente-invalido");

    }

    if(!alturaValida){
        console.log('Altura inválida');
        alturaValida = false;
        tdImc.textContent.add("altura-invalida");
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        var imc = calculaIMC(peso,altura);
        tdImc.textContent = imc;
    }
}

//se está de acordo com o peso tradicional
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaIMC(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}





