class Projeto {
    constructor(nome, descricao,responsavel,dataInicio,dataFim,status){
this.nome=nome
this.descricao=descricao
this.responsavel=responsavel
this.dataInicio=dataInicio
this.dataFim=dataFim
this.tarefas=[]
this.status=status
    }


adicionarTarefas(tarefa){
    this.tarefas.push(tarefa)
}
conclusaoProjeto(){
    this.status="Projeto concluido"
}
}

// module.exports=Projeto