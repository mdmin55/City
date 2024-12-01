import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	Relation,
} from 'typeorm'
import Problem from './Problem.model.js'

@Entity()
class Category {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	title: string

	@OneToMany(_type => Problem, (problem: Problem) => problem.category, {
		cascade: true,
	})
	problems: Relation<Problem>[]
}

export default Category
