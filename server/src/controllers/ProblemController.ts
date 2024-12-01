import { Request, Response } from 'express'
import { ProblemRepo } from '../repositories/ProblemRepo.js'

class ProblemController {
	static getAll = async (req: Request, res: Response) => {
		try {
			const data = await ProblemRepo.find({
				relations: {
					user: true,
					category: true
				}
			})

			res.json(data)
		} catch (error) {
			res.status(400).json({
				message: 'getAll Problem errors',
				error: error
			})
		}
	}

	static create = async (req: Request, res: Response) => {
		try {
			const problem = req.body
			const data = await ProblemRepo.save({
				title: problem.title,
				description: problem.description,
				beforeImg: problem.beforeImg,
				user: {
					id: problem.user
				},
				category: {
					id: problem.category
				}
			})

			res.status(201).json({
				message: 'Success',
				data: data
			})
		} catch (error) {
			res.status(400).json({
				message: 'Create Problem errors',
				error: error
			})
		}
	}

	static update = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id)
			const updateData = {
				status: req.body.status,
				afterImg: req.body.afterImg
			}
			const data = await ProblemRepo.update(id, updateData)
			res.status(201).json({
				message: 'Success',
				data: data
			})
		} catch (error) {
			res.status(400).json({
				error
			})
		}
	}

	static delete = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id)
			const data = await ProblemRepo.delete({
				id: id
			})

			res.status(201).json({
				message: 'Success',
				data: data
			})
		} catch (error) {
			res.status(400).json({
				message: 'Delete Problem errors',
				error: error
			})
		}
	}
}

export default ProblemController
