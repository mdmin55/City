import { useContext, useRef, useState } from 'react'
import AuthBtn from './AuthBtn'
import { CategoryContext, ProblemContext } from '../main'
import ProblemService from '../services/ProblemService'

const ProblemForm = () => {
	const { categories } = useContext(CategoryContext)
	const { setProblem } = useContext(ProblemContext)
	const [err, setErr] = useState()
	const [photoErr, setPhotoErr] = useState()
	const [success, setSuccess] = useState()
	const [size, setSize] = useState()
	const formRef = useRef(null)
	const [currProblem, setCurrProblem] = useState({
		title: '',
		description: '',
		beforeImg: '',
		category: '',
		user: localStorage.getItem('userId')
	})
	const MAX_SIZE = 10 * 1024 * 1024
	const toBase64 = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => {
				resolve(reader.result)
			}
			reader.onerror = err => {
				reject(err)
			}

			if (file) {
				reader.readAsDataURL(file)
			}
		})
	}

	const uploadFile = async file => {
		setSize(file.size)
		const base64String = await toBase64(file)
		setCurrProblem(prevState => ({
			...prevState,
			beforeImg: base64String
		}))
	}

	const add = async e => {
		e.preventDefault()
		let copy = Object.values(currProblem)
		copy.pop()
		if (copy.every(e => e === '')) {
			setErr('Все поля являются обязательными')
		} else {
			if (size > MAX_SIZE) {
				setPhotoErr('Размер файла превышает 10 Мб')
			} else {
				await ProblemService.create(currProblem)
				const problems = await ProblemService.getAll()
				setProblem(problems)
				setSuccess('Заявка добавлена успешно')
			}
			setErr('')
		}
		formRef.current.reset()
	}
	return (
		<div className='bg-[#c5ad87] p-6 rounded-lg  shadow-lg max-w-md w-full'>
		<form
			className='hidden flex-col max-h-screen gap-y-3 px-4 mt-5 md:flex md:mt-0'
			ref={formRef}
		>
			<div className='flex flex-col w-full justify-center px-10 '>
				<p className='text-danger font-bold'>{err}</p>
				<p className='text-success font-bold'>{success}</p>
				<label htmlFor='title' className='font-semibold text-lg md:text-xl text-center mt-2'>
					Название заявки
				</label>
				<input
					className='py-2 px-3 rounded-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight'
					type='text'
					value={currProblem.title}
					onChange={e => {
						setErr('')
						setCurrProblem({ ...currProblem, [e.target.name]: e.target.value })
					}}
					name='title'
					id='title'
					required
				/>
				<label
					htmlFor='description'
					className='font-semibold text-lg md:text-xl text-center mt-2'
				>
					Описание
				</label>
				<textarea
					name='description'
					id='description'
					onChange={e => {
						setErr('')
						setCurrProblem({ ...currProblem, [e.target.name]: e.target.value })
					}}
					className='py-2 px-3 rounded-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight'
				></textarea>
				<label htmlFor='category' className='font-semibold text-lg md:text-xl text-center mt-2'>
					Категория
				</label>
				<select
					id='category'
					onChange={e => {
						setErr('')
						setCurrProblem({ ...currProblem, [e.target.name]: e.target.value })
					}}
					className='py-2 px-3 rounded-lg text-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight'
					name='category'
					required
				>
					<option value='' className='text-lg font-semibold text-center'>
						Выберите категорию
					</option>
					{categories?.map(e => (
						<option value={e.id} key={e.id}>
							{e.title}
						</option>
					))}
				</select>
				<label
					htmlFor='beforeImg'
					className='font-semibold text-lg md:text-xl text-center mt-2'
				>
					Изображение
					<p className='text-sm text-white/50'>до 10мb</p>
				</label>
				<input
					className='rounded-lg text-white text-lg font-semibold outline-none placeholder: placeholder:font-extralight mt-2'
					type='file'
					name='beforeImg'
					onChange={e => {
						setErr('')
						setPhotoErr('')
						setCurrProblem({ ...currProblem, [e.target.name]: e.target.value })
						uploadFile(e.target.files[0])
					}}
					id='beforeImg'
					required
				/>
				<p className='text-danger font-bold'>{photoErr}</p>
				<AuthBtn title={'Отправить'} onClick={add} />
			</div>
		</form></div>
	)
}

export default ProblemForm
