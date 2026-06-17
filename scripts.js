let input = document.getElementById("input-principal")
let buttonAd = document.getElementById("botao-adicionar")
let buttonEx = document.getElementById("botao-limpar")
let listaCompleta = document.getElementById("tarefas")

let arrayTarefas = []

let storage = localStorage;

arrayTarefas = JSON.parse(storage.getItem("tarefasLista")) || []

function cliqueBotao(){
    let texto = input.value.trim()

    if (!texto)
        return

    arrayTarefas.push({texto, concluida: false})
    atualizaTarefasStorage(arrayTarefas)
    mostrarNaTela()
    input.value = ""
    input.focus()
}

function mostrarNaTela(){
    let novaLista = ""

    arrayTarefas.forEach(( tarefa, indice) =>{
        let tarefaConcluida = tarefa.concluida ? "concluida" : ""

        novaLista = novaLista + `
        <li class="item-lista ${tarefaConcluida}"  data-indice="${indice}">
            <p class="item-tarefa ">${tarefa.texto}</p>
            <button class="button-item-tarefa botao-hover button-check-item">✓</button>
            <button class="button-item-tarefa botao-hover button-editar-item">✎</button>
            <button class="button-item-tarefa botao-hover button-excluir-item">x</button>
        </li>
        `
    })
    
    listaCompleta.innerHTML = novaLista
}

function limpaLista(){
    arrayTarefas = []
    atualizaTarefasStorage(arrayTarefas)
    mostrarNaTela()
}

function excluirItem(){
    console.log(buttonExcluir.parentElement)
}

function clicarItem(event){
    let item = event.target.parentElement
    let indiceTarefa = Number(item.dataset.indice)

    if (event.target.classList.contains("button-check-item")){
        arrayTarefas[indiceTarefa].concluida = !arrayTarefas[indiceTarefa].concluida
    } else if (event.target.classList.contains("button-excluir-item")){
        arrayTarefas.splice(indiceTarefa, 1)
        
    }

    atualizaTarefasStorage(arrayTarefas)
    mostrarNaTela()
}
    
function atualizaTarefasStorage(arrayT){
    storage.setItem("tarefasLista", JSON.stringify(arrayT))
}

function clicarEnter(event){
    if (event.key === 'Enter')
        cliqueBotao()
}

buttonAd.addEventListener("click", cliqueBotao)

buttonEx.addEventListener("click", limpaLista)

listaCompleta.addEventListener("click", clicarItem)

input.addEventListener("keydown", clicarEnter)

mostrarNaTela()

