import { AppDataSource } from '../data-source.js'
import Problem from '../models/Problem.model.js'

export const ProblemRepo = AppDataSource.getRepository(Problem)