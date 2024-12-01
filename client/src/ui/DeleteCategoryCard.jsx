import { useContext, useState } from 'react'
import { AuthContext, CategoryContext } from '../main'
import AuthBtn from './AuthBtn'
import CategoryService from '../services/CategoryService'

const DeleteCategoryCard = () => {
	const { categories, setCategories } = useContext(CategoryContext)
	const { user } = useContext(AuthContext)
	const [category, setCategory] = useState()
	const [success, setSuccess] = useState()
	const del = async e => {
		e.preventDefault()
		await CategoryService.delete(category)
		const categories = await CategoryService.getAll()
		setCategories(categories)
		setSuccess('Категория удалена успешно')
	}
	console.log(category)
	return (
		<form
			className={`hidden flex-col max-h-screen gap-y-3 px-4 mt-5 md:${
				user?.role === 'admin' ? 'block' : 'hidden'
			}  md:mt-0`}
		>
			<p className='text-success font-bold'>{success}</p>
			<div className='flex flex-col gap-1 w-full justify-center'>
				<label htmlFor='category' className='font-semibold text-lg md:text-2xl'>
					Категория
				</label>
				<select
					id='category'
					onChange={e => setCategory(e.target.value)}
					className='py-2 px-3 rounded-lg text-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight'
					name='category'
					required
				>
					<option value='' className='text-lg font-semibold'>
						Выберите категорию
					</option>
					{categories?.map(e => (
						<option value={e.id} key={e.id}>
							{e.title}
						</option>
					))}
				</select>
				<AuthBtn title={'Удалить'} onClick={del} color={'danger'} />
			</div>
		</form>
	)
}

export default DeleteCategoryCard
