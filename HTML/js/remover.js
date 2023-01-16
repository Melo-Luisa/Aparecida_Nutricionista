var pacientes = document.querySelectorAll("table");
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event){
        /*aquele que está escutando 
        this.remove();*/

        event.target.parentNode.classList.add("faceOut");
        //segura a função e executa depois (aceita apenas em milisegundos)
        setTimeout(function(){
            event.target.parentNode.remove()
        }, 500);
       

    });
});