import express from 'express'
import databaseService from './services/database.service'
import dotenv from 'dotenv'
import userRouter from './routes/users.routes'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use('/users', userRouter)

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
