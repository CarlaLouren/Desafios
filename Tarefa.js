class Tarefa {
    constructor(nome, descricao, responsavel,  dataFim,  status) {
        this.nome = nome
        this.descricao = descricao
        this.responsavel = responsavel
        this.dataFim = dataFim
        this.status = status

    }
    conclusaoTarefas(){
        this.status="Tarefa concluida"
    }
    

}
// module.exports=Tarefa