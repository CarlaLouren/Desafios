// const Projeto = require("./Projeto")
// const Tarefa = require("./Tarefa")


// const projeto = new Projeto("Carla", "Deve ser desenvolvido em javaScript", "Dr joao Figueiredo", 20 - 03 - 2023, 20 - 04 - 2023, "em andamento")
// const tarefa = new Tarefa("Cristina","deve ser desenvolvido em javaScript","Maria silva","14-04-2024")

// projeto.adicionarTarefas(tarefa)
// tarefa.conclusaoTarefas()
// projeto.conclusaoProjeto()
// console.log(projeto.status);
// console.log(tarefa.status);
// console.log(projeto);
// console.log(tarefa);


function criarProjeto(event) {
    event.preventDefault()
    const nomeDoProjeto = document.getElementById("nomeDoProjeto").value
    const descricao = document.getElementById("descricaoProjeto").value
    const responsavel = document.getElementById("responsavel").value
    const datainicio = document.getElementById("dataInicio").value
    const dataFim = document.getElementById("dataFim").value
const projeto = new Projeto(nomeDoProjeto,descricao,responsavel,datainicio,dataFim)
adicionarProjeto(projeto)
document.getElementById("projeto form").reset()
}
function adicionarProjeto(projeto) {
   const projetoList=document.getElementById("projetoLista") 
   const Li=document.createElement("li")
   Li.innerHTML=` <strong>${projeto.nome}</strong> - ${projeto.descricao} - ${projeto.responsavel}
   <button onclick="concluirProjeto(${projetoList.children.length})" id="btn">Concluir</button>
   <ul id="tarefasProjeto${projetoList.children.length}"></ul>
  `

  projetoList.appendChild(Li)


}


function concluirProjeto(index) {
    const projetoList=document.getElementById("projetoLista")
    const projeto=projetoList.children[index]
    projeto.querySelector("button").remove()
    projeto.querySelector("ul").remove()

    
}


document.getElementById("projetoForm").addEventListener("submit",criarProjeto)
