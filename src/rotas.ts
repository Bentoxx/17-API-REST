//IMPORTAÇÃO DE BIBLIOTECAS, ROTAS, INTERMEDIÁRIOS E CONTROLADORES
import { Router } from 'express'
import { listar } from './controladores/intrutores'

const rotas = Router()

rotas.get('/instrutores', listar)//listar toddos os instrutores cadastrados

//detalhar as informações de um instrutor
//cadastrar um instrutor
//editar um intrutor
//excluir um instrutor

//cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default rotas
