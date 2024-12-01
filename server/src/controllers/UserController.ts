import { Request, Response } from 'express'
import { UserRepo } from '../repositories/UserRepo.js'

class UserController {
	static getById = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id)
			const data = await UserRepo.findOne({
				where: {
					id: id
				},
				relations: {
					problems: {
						category: true
					}
				}
			})

			res.json(data)
		} catch (error) {
			res.status(400).json({
				message: 'getById User errors:',
				error: error
			})
		}
	}

	static register = async (req: Request, res: Response) => {
		try {
			const user = UserRepo.create(req.body)
			const data = await UserRepo.save(user)

			res.status(201).json({
				message: 'Success',
				data: data
			})
		} catch (error) {
			res.status(400).json({
				message: 'Register User errors',
				error: error
			})
		}
	}

	static login = async (req: Request, res: Response) => {
		try {
			const data = await UserRepo.findOneBy({
				login: req.body.login
			})

			if (!data) {
				res.status(400).json({
					message: 'Пользователь не найден'
				})
				return
			}

			if (data.password === req.body.password) {
				res.status(201).json({
					message: 'Success',
					data: data
				})
			} else {
				res.status(400).json({
					message: 'Неверный логин или пароль'
				})
			}
		} catch (error) {
			res.status(400).json({
				message: 'Login User errors',
				error: error
			})
		}
	}
}

export default UserController
