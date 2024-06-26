import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.send ('OK')
})

app.listen(process.env.PORT)