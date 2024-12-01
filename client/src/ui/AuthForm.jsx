import { useState } from 'react'
import { validData } from '../utils/validation'
const AuthForm = ({
	label,
	title,
	type,
	placeholder,
	setForm,
	form,
	validate
}) => {
	const [err, setErr] = useState()
	const handleChange = e => {
		const { name, value } = e.target
		if (validate) {
			const validationResult = validData[name](value)
			setErr(validationResult)
		}
		if (name === 'twoPassword') {
			const password = form.password

			if (password !== value) {
				setErr('Пароли не совпадают')
			} else {
				setErr()
			}
		}
		setForm({ ...form, [name]: value })
	}
	return (
		<>
			<div className='flex flex-col gap-1 w-full'>
				<label htmlFor={title} className='font-normal text-xs md:text-xl'>
					{label}
				</label>
				<input
					className={`${
						err ? ' border-danger border-solid border-2 ' : ''
					} py-2 px-3 rounded-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight`}
					type={type}
					placeholder={placeholder}
					name={title}
					id={title}
					onChange={handleChange}
					required
				/>
				<p className='text-danger font-bold'>{err}</p>
			</div>
		</>
	)
}

export default AuthForm
