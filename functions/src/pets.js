
import db from'./connectionDb.js'

import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'
import { getAllPets, addPets } from './src/coffees.js'

const app = express()
app.use(cors())
app.use(express.json())

//app.get("/test", (res, req) => res.send ("it is working"))

app.get('/coffees', getAllPets)
app.post("/coffees", addPets)

export const api = onRequest(app)


