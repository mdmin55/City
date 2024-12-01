import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	Relation,
	UpdateDateColumn,
} from 'typeorm'
import User from './User.model.js'
import Category from './Category.model.js'

export enum Status {
	NEW = 'Новая',
	SOLVED = 'Решена',
	REJECTED = 'Отклонена',
}

@Entity()
class Problem {
	@PrimaryGeneratedColumn()
	id: number

	@Column({nullable: false})
	title: string

	@Column({
		type: 'text',
		nullable: false,
	})
	description: string

	@Column({
		type: 'enum',
		enum: Status,
		default: Status.NEW,
	})
	status: Status

	@Column({ nullable: false, name: 'before_img' })
	beforeImg: string

	@Column({ nullable: true, name: 'after_img' })
	afterImg: string

	@ManyToOne(_type => Category, (category: Category) => category.problems, {
		onDelete: 'CASCADE',
		nullable: false,
	})
	@JoinColumn()
	category: Relation<Category>

	@ManyToOne(_type => User, (user: User) => user.problems, {
		onDelete: 'CASCADE',
	})
	@JoinColumn()
	user: Relation<User>

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}

export default Problem
