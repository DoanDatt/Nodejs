import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.service'

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'admin' && password === 'admin') {
    res.status(200).json({
      message: 'Login success'
    })
  }
  res.status(401).json({
    message: 'Login failed'
  })
}
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    res.json({
      message: 'Register success'
    })
  } catch (error) {
    res.status(400).json({
      error: 'Register failed'
    })
  }
}
