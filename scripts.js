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

    arrayTarefas.forEach(( tarefa, indice) =>{

        novaLista = novaLista + `
        <li class="item-lista" >
            <p class="item-tarefa" data-indice="${indice}">${tarefa}</p>
            <button class="button-item-tarefa botao-verde botao-hover button-check-item">✓</button>
            <button class="button-item-tarefa botao-vermelho botao-hover button-excluir-item">x</button>
        </li>
        `
    })
    
    listaCompleta.innerHTML = novaLista
    
}

function limpaLista(){
    arrayTarefas = []
    mostrarNaTela()
}

function excluirItem(){
    console.log(buttonExcluir.parentElement)
}

function clicarItem(event){
    let item = event.target.parentElement

    if (event.target.classList.contains("button-check-item")){
        let tarefa = item.querySelector(".item-tarefa")
        tarefa.style.backgroundColor = "rgb(128, 238, 128)"

    } else if (event.target.classList.contains("button-excluir-item")){
        let indiceTarefa = Number(item.dataset.indice)
        arrayTarefas.splice(indiceTarefa, 1)
        mostrarNaTela()

    }
}
    



buttonAd.addEventListener("click", cliqueBotao)

buttonEx.addEventListener("click", limpaLista)

listaCompleta.addEventListener("click", clicarItem)





