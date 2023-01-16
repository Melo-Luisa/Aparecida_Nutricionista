//não limpar o formulário
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //extraindo informaçoes do paciente do form 
    var paciente = obetemPF(form);

    //criar Tr do paciente
    var pacienteTr = montaTr(paciente);

    //valida informações add são corretas
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensE(erros);
        return;
    }

    //validar o paciente
    if(!validaPaciente(paciente)){
        console.log("paciente inválido");
        return;
    }
 
    addPaciTabel(paciente);

    //mostra na tabela as informações
    tabela.appendChild(pacienteTr); 

    form.reset();

    var mensagemError = document.querySelector("#Mensagem-error");
    mensagemError.innerHTML = "";   

});

function addPaciTabel(paciente){
    //criar Tr do paciente
    var pacienteTr = montaTr(paciente);

    //add o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //mostra na tabela as informações
    tabela.appendChild(pacienteTr); 
};

function exibeMensagensE(erros){
    var ul = document.querySelector("#Mensagem-error");

    //Para editar o HTML interno de um elemento, basta passar o novo conteúdo por parâmetro para a propriedade.
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obetemPF(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, ".info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, ".info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, ".info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, ".info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, ".info-imc"));   
   
    return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

//valida o peso do paciente - caso negativo mensagem de erro 
function validaPaciente(paciente){
    var erros = [];

    //JS entende sem os {}
    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura é válida");

    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco");

    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    return erros;
}   