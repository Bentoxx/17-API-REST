//IMPORTAÇÃO DE BIBLIOTECAS, ROTAS, INTERMEDIÁRIOS E CONTROLADORES
import 'dotenv/config'
import express, { Request, Response } from 'express'
import rotas from './rotas'

//INSTANCIAMENTO DO EXPRESS NA APLICAÇÃO
const app = express()

//INSTANCIAMENTO DO MIDDLEWARE JSON PARA PADRONIZAR A COMUNICAÇÃO CONFORME REST
app.use(express.json())

//CHAMADA DE ROTAS POR MIDDLEWARE UTILIZANDO O MÉTODO .USE
app.use(rotas)

//CHAMADA DE PORTA PARA SER ESCUTADA PELA APLICAÇÃO
app.listen(process.env.PORT)