//IMPORTAÇÃO DE BIBLIOTECAS, ROTAS, INTERMEDIÁRIOS E CONTROLADORES
import { Router } from 'express'
import { teste } from './controladores/controladores'

const rotas = Router()

rotas.get('/', teste)
//EXPORTAÇÃO DA(S) ROTA(S) UTILIZANDO O MÉTODO DEFAULT
export default rotas