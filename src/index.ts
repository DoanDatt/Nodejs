import express from 'express'
import databaseService from './services/database.service'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT
console.log(port)
app.use(express.json())
databaseService.connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
