import { Request, Response} from "express";
import bancodedados from '../bancodedados'

//Declaração de função para cadastro de aula para um instrutor, vai utilizar o método PUSH
export function cadastrarAulas(req: Request, res: Response){
    const { id } = req.params
    const { nome } = req.body
    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(!instrutor){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)!'
        })
    }
    const novaAula = { //Declaração de objeto para armazenamento de nova aula e geração automática do id da aula
        id: bancodedados.proximoIdentificadorAula++,
        nome
    }
    //Verificação se existe aula cadastrada e no caso de não existir, adiciona
    if(instrutor.aulas){
        instrutor.aulas.push(novaAula)
        return res.status(201).json(novaAula)
    }
    instrutor.aulas = [novaAula]
}
//Declaração de função para deletar cadastro de uma aula para determinado intrutor, vai utilizar o verbo DELETE
export function excluirAula (req: Request, res: Response){
    const { id, idAula } = req.params 
    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(!instrutor){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)!'
        })
    }
    if(!instrutor.aulas){
        return res.status(404).json({
            mensagem: 'Aula não encontrada para o instrutor informado'
        })
    }
    const aulaIndex = instrutor.aulas?.findIndex((item)=>{//atribuicao de variável para o caso de aula encontrada
        return item.id === Number(idAula)
    })
    if(aulaIndex === -1){//verificação da existencia da aula informado na requisição
        return res.status(404).json({
            mensagem: 'Aula não encontrada para o instrutor informado'
        })
    }
    instrutor.aulas.splice(aulaIndex,1) //uma vez que a aula tenha sido encontrada, exclui a mesma com o método splice
    return res.status(204).send()//retorno No Content
}