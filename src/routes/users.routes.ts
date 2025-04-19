import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'

const userRouter = Router()
// userRouter.post('/login', loginValidation, loginController)
userRouter.post('/register', registerController)

export default userRouter
