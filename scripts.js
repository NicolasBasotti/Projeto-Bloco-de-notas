let input = document.getElementById("input-principal")
let buttonAd = document.getElementById("botao-adicionar")
let buttonEx = document.getElementById("botao-limpar")
let listaCompleta = document.getElementById("tarefas")
let modal = document.getElementById("modal")
let textEditar = document.getElementById("editar-tarefa")


let arrayTarefas = []
let indiceAlterandoTarefa;
let storage = localStorage;

arrayTarefas = JSON.parse(storage.getItem("tarefasLista")) || []

function cliqueBotao(){
    let texto = input.value.trim()

    if (!texto)
        return

    arrayTarefas.push({texto, concluida: false})
    atualizaTarefasStorage()
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
    atualizaTarefasStorage()
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
    }else if (event.target.classList.contains("button-editar-item")){
        textEditar.value = arrayTarefas[indiceTarefa].texto;
        indiceAlterandoTarefa = indiceTarefa;
        modal.showModal();
    }

    atualizaTarefasStorage()
    mostrarNaTela()
}


    
function atualizaTarefasStorage(){
    storage.setItem("tarefasLista", JSON.stringify(arrayTarefas))
}

function clicarEnter(event, acao){
    if (event.key === 'Enter')
        acao(event);
}

function modalBotoes(){
    if(event.target.classList.contains("button-cancelar")){
        modal.close()
        textEditar.value = "";
    }else if(event.target.classList.contains("button-salvar")){
        alteraTarefa(event);
    }
}

function alteraTarefa(event){
    let novoTexto = textEditar.value.trim();
    if (!novoTexto)
        return
    arrayTarefas[indiceAlterandoTarefa].texto = novoTexto
    atualizaTarefasStorage()
    modal.close();
    mostrarNaTela()
}


buttonAd.addEventListener("click", cliqueBotao)

buttonEx.addEventListener("click", limpaLista)


listaCompleta.addEventListener("click", clicarItem)

input.addEventListener("keydown", (event) =>clicarEnter(event, cliqueBotao))

textEditar.addEventListener("keydown", (event) => clicarEnter(event, alteraTarefa))

modal.addEventListener("click", modalBotoes)

mostrarNaTela()


