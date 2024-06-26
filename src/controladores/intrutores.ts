import { Request, Response, NextFunction } from "express";

type TInstrutores = { //CRIAÇÃO DE TIPO GLOBAL PARA PADRONIZAR O ARRAY INSTRUTORES
    id: number
    nome: string
    email: string
}
let proximoIdentificador = 3 //Declaração de variável para geração de ID automático
const instrutores: TInstrutores[] = [
    {
        id: 1,
        nome: 'Bento',
        email: 'bento@email.com'
    },
    {
        id: 2,
        nome: 'Emanuele',
        email: 'manu@email.com'
    }
]
//declaração de função para listagem em rota de todos os instrutores com o status 200
export function listar (req: Request, res: Response){
    return res.status(200).json(instrutores)
}

//declaração de função para detalhamento em rota de um determinado instrutor com o status 200
export function detalhar (req: Request, res: Response){
    const { id } = req.params
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(!instrutor){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)!'
        })
    }
    return res.status(200).json(instrutor)
}

//Declaração de função para cadastro de instrutor, vai utilizar o método PUSH
export function cadastrar (req: Request, res: Response){
    const { nome, email } = req.body //Desestruturando os dados recebidos no corpo da requisição
    const novoInstrutor = {//Definição de variável para armazenamento dos dados do copor da requisição
        id: proximoIdentificador++, //a variável atribui um valor e é incrementada em 1 após a atribuição
        nome,
        email
    }
    instrutores.push(novoInstrutor)//Adicionando os dados recebidos pelo corpo da requisição no array pelo método push
    return res.status(201).json(novoInstrutor)
}

//Declaração de função para atualização de cadastro de um intrutor, vai utilizar o verbo PUT
export function atualizar (req: Request, res: Response){
    const { id } = req.params 
    const { nome, email } = req.body //Desestruturando os dados recebidos no corpo da requisição
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(!instrutor){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)!'
        })
    }
    //Atribuição de novos dados
    instrutor.nome = nome
    instrutor.email = email
    //Retorno de mensagem No Content
    return res.status(204).send()
}
//Declaração de função para atualização parcial de cadastro de um intrutor, vai utilizar o verbo PATCH
export function atualizarEmail (req: Request, res: Response){
    const { id } = req.params 
    const { email } = req.body //Desestruturando os dados recebidos no corpo da requisição
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(!instrutor){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)!'
        })
    }
    //Atribuição de novos dados
    instrutor.email = email
    //Retorno de mensagem No Content
    return res.status(204).send()
}
//Declaração de função para deletar cadastro de um intrutor, vai utilizar o verbo DELETE
export function excluir (req: Request, res: Response){
    const { id } = req.params 
    const instrutorIndice = instrutores.findIndex((item) => {//utilizando o método de busca de índice
        return item.id === Number(id) //Aqui se converte o ID de string para number
    })
    if(instrutorIndice === -1){//verificação da existencia do instrutor informado na requisição
        return res.status(404).json({
        mensagem: 'Instrutor(a) não encontrado(a)!'
    })
}
    instrutores.splice(instrutorIndice, 1)//Esse método de array vai excluir os dados no indice informado
    return res.status(204).send()
}
