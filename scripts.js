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
        arrayTarefas.push({texto, concluida: false})
        mostrarNaTela()
    }
}

function mostrarNaTela(){
    let novaLista = ""

    arrayTarefas.forEach(( tarefa, indice) =>{
        let tarefaConcluida = tarefa.concluida ? "concluida" : ""

        novaLista = novaLista + `
        <li class="item-lista"  data-indice="${indice}">
            <p class="item-tarefa ${tarefaConcluida}">${tarefa.texto}</p>
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
    let indiceTarefa = Number(item.dataset.indice)

    if (event.target.classList.contains("button-check-item")){
        arrayTarefas[indiceTarefa].concluida = !arrayTarefas[indiceTarefa].concluida
    } else if (event.target.classList.contains("button-excluir-item")){
        arrayTarefas.splice(indiceTarefa, 1)
    }
    mostrarNaTela()
}
    


buttonAd.addEventListener("click", cliqueBotao)

buttonEx.addEventListener("click", limpaLista)

listaCompleta.addEventListener("click", clicarItem)





