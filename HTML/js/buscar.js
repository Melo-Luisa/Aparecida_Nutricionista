//Puxando informações de documentos externos
var botaoAdd = document.querySelector("#busca-paciente");
botaoAdd.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    //não é necessário ter o doc na maquina - possibilidades do JSON
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //puxar o doc tipo JSON
    xhr.addEventListener("load", function(){
        //Mostrar mensagem de error 404 - esta no index como <span>
        var errorAjax = document.querySelector("#errorAjax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisivel");
            console.log(xhr.responseText);
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                //var add no form
                addPaciTabel(paciente);
            });
        }else{
            //mostra erro no console
            console.log(xhr.status);
            //mostra error na tela
            errorAjax.classList.remove("invisivel");
        }
    });
    //envia o doc
    xhr.send();

})