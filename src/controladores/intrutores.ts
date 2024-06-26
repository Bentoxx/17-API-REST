import { Request, Response, NextFunction } from "express";

type TInstrutores = { //CRIAÇÃO DE TIPO GLOBAL PARA PADRONIZAR O ARRAY INSTRUTORES
    id: number
    nome: string
    email: string
}

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
}//declaração de função para detalhamento em rota de um determinado instrutor com o status 200
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
}//Declaração de função para cadastro de instrutor em rota
export function cadastrar (req: Request, res: Response){
    const { nome, email } = req.body //Desestruturando os dados recebidos no corpo da requisição
    const novoInstrutor = {//Definição de variável para armazenamento dos dados do copor da requisição
        id: 3,
        nome,
        email
    }
    instrutores.push(novoInstrutor)//Adicionando os dados recebidos pelo corpo da requisição no array pelo método push
    return res.status(201).json(novoInstrutor)
}