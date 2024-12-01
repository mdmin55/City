import { Request, Response } from 'express'
import { CategoryRepo } from '../repositories/CategoryRepo.js'
import Category from '../models/Category.model.js'

class CategoryController {
	static getAll = async (req: Request, res: Response) => {
		try {
			const data = await CategoryRepo.find()

			res.json(data)
		} catch (error) {
			res.status(400).json({
				message: 'getAll Category errors',
				error: error,
			})
		}
	}

	static create = async (req: Request, res: Response) => {
		try {
			const category = new Category()
			category.title = req.body.category
			const data = await CategoryRepo.save(category)

			res.status(201).json({
				message: 'Success',
				data: data,
			})
		} catch (error) {
			res.status(400).json({
				message: 'Create Category errors',
				error: error,
			})
		}
	}

	static delete = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params.id)
			const data = await CategoryRepo.delete({
				id: id,
			})

			res.status(201).json({
				message: 'Success',
				data: data,
			})
		} catch (error) {
			res.status(400).json({
				message: 'Delete Category errors',
				error: error,
			})
		}
	}
}

export default CategoryController
