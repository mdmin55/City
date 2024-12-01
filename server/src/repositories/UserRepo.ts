import { AppDataSource } from '../data-source.js'
import User from '../models/User.model.js'

export const UserRepo = AppDataSource.getRepository(User)
