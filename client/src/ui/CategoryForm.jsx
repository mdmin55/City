import { useRef, useState } from 'react'
import AuthBtn from './AuthBtn'
import CategoryService from '../services/CategoryService'
import { useContext } from 'react'
import { AuthContext, CategoryContext } from '../main'
import { useEffect } from 'react'

const CategoryForm = ({ setCatShow, catShow }) => {
	const { categories, setCategories } = useContext(CategoryContext)
	const { user } = useContext(AuthContext)
	const [category, setCategory] = useState()
	const [err, setErr] = useState()
	const catRef = useRef(null)
	const [success, setSuccess] = useState()
	const add = async e => {
		e.preventDefault()
		if (
			categories?.some(cat => {
				return cat.title === category
			})
		) {
			setErr('Такая категория уже существует')
			setSuccess('')
		} else {
			await CategoryService.create({ category: category })
			const categories = await CategoryService.getAll()
			setCategories(categories)
			setSuccess('Категория добавлена успешно')
			setErr('')
		}
		catRef.current.reset()
	}
	useEffect(() => {
		if (success) {
			const time = setTimeout(() => setCatShow(false), 3000)

			return () => {
				clearTimeout(time)
			}
		}
	}, [success])
	return (
		<form
			className={`hidden flex-col max-h-screen gap-y-3 px-4 mt-5 md:${
				user?.role === 'admin' ? 'block' : 'hidden'
			}  md:mt-0`}
			ref={catRef}
		>
			<div>
				{err ? (
					<p className='text-danger font-bold'>{err}</p>
				) : (
					<p className='text-success font-bold'>{success}</p>
				)}
				<div className='flex flex-col gap-1 w-full justify-center'>
					<label htmlFor='title' className='font-semibold text-lg md:text-2xl'>
						Название категории
					</label>
					<input
						className='py-2 px-3 rounded-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight'
						type='text'
						name='title'
						id='title'
						onChange={e => setCategory(e.target.value)}
						required
					/>
					<AuthBtn title={'Добавить'} onClick={add} />
				</div>
			</div>
		</form>
	)
}

export default CategoryForm
