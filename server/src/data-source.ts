import dotenv from 'dotenv'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import Category from './models/Category.model.js'
import Problem from './models/Problem.model.js'
import User from './models/User.model.js'

dotenv.config()

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [User, Problem, Category],
	migrations: [],
	subscribers: [],
})
