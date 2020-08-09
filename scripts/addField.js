//procurar o botão 
document.querySelector("#add-time")
.addEventListener('click',cloneField)

//quando clicar no botao

//executar uma acao
function cloneField()
{
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field){
        //pega o field do momento e limpa ele 
        field.value = ""
        
    });

    // colocar na pagina 
    //onde : 
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

    

    