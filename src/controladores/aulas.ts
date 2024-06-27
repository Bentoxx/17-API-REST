import { Request, Response} from "express";
import bancodedados from '../bancodedados'

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