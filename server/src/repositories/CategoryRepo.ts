import { AppDataSource } from '../data-source.js'
import Category from '../models/Category.model.js'

export const CategoryRepo = AppDataSource.getRepository(Category)
