type TAulas = {
    id: number
    nome: string
}

type TInstrutores = { 
    id: number
    nome: string
    email: string
    aulas?: TAulas[]
}

type TBancodedados = {
    proximoIdentificador: number
    instrutores: TInstrutores[]
}
const bancodedados: TBancodedados = {
    proximoIdentificador: 3,
    instrutores: [
    {
        id: 1,
        nome: 'Bento',
        email: 'bento@email.com',
        aulas: [{id:1, nome: 'Aula de API REST'}]
    },
    {
        id: 2,
        nome: 'Emanuele',
        email: 'manu@email.com',
        aulas:[]
    }
]}
export default bancodedados
