let input = document.getElementById("input-principal")
let buttonAd = document.getElementById("botao-adicionar")
let buttonEx = document.getElementById("botao-limpar")
let listaCompleta = document.getElementById("tarefas")

let arrayTarefas = []

function cliqueBotao(){
    let texto = input.value.trim()

    if (!texto)
        return
    else { 
        arrayTarefas.push(texto)
        mostrarNaTela()
    }
}

function mostrarNaTela(){
    let novaLista = ""

    arrayTarefas.forEach( tarefa =>{

        novaLista = novaLista + `
        <li class="item-lista" >
            <p class="item-tarefa">${tarefa}</p>
        </li>
        `
    })
    
    listaCompleta.innerHTML = novaLista
    
}

function limpaLista(){
    arrayTarefas = []
    mostrarNaTela()
}


buttonAd.addEventListener("click", cliqueBotao)

buttonEx.addEventListener("click", limpaLista)


