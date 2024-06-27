//IMPORTAÇÃO DE BIBLIOTECAS, ROTAS, INTERMEDIÁRIOS E CONTROLADORES
import { Router } from 'express'
import { atualizar, atualizarEmail, cadastrar, detalhar, excluir, listar } from './controladores/intrutores'
import { cadastrarAulas } from './controladores/aulas'

const rotas = Router()

rotas.get('/instrutores', listar)//listar toddos os instrutores cadastrados
rotas.get('/instrutores/:id', detalhar)//detalhar as informações de um instrutor
rotas.post('/instrutores', cadastrar)//cadastrar um instrutor
rotas.put('/instrutores/:id', atualizar)//editar um intrutor
rotas.patch('/instrutores/:id/alterarEmail', atualizarEmail)//editar parcialmente um instrutor
rotas.delete('/instrutores/:id', excluir)//excluir um instrutor
rotas.post('/instrutores/:id/aulas', cadastrarAulas)//cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default rotas
