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

export function listar (req: Request, res: Response){//chamada da função de listagem dos instrutores com o status 200
    return res.status(200).json(instrutores)
}
