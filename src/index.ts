//IMPORTAÇÃO DE BIBLIOTECAS, ROTAS, INTERMEDIÁRIOS E CONTROLADORES
import 'dotenv/config'
import express, { Request, Response } from 'express'
import rotas from './rotas'

//INSTANCIAMENTO DO EXPRESS NA APLICAÇÃO
const app = express()

//CHAMADA DE ROTAS POR MIDDLEWARE UTILIZANDO O MÉTODO .USE
app.use(rotas)

//CHAMADA DE PORTA PARA SER ESCUTADA PELA APLICAÇÃO
app.listen(process.env.PORT)