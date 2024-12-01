import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	Relation
} from 'typeorm'
import Problem from './Problem.model.js'
import 'reflect-metadata'

export enum Role {
	ADMIN = 'admin',
	USER = 'user'
}

@Entity()
class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: 'enum',
		enum: Role,
		default: Role.USER
	})
	role: Role

	@Column({ nullable: false })
	surname: string

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	patronymic: string

	@Column({ unique: true, nullable: false })
	login: string

	@Column({ unique: true, nullable: false })
	email: string

	@Column({ nullable: false })
	password: string

	@OneToMany(_type => Problem, (problem: Problem) => problem.user, {
		cascade: true
	})
	problems: Relation<Problem>[]
}

export default User
