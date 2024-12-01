import { useState } from 'react'
import AuthArrow from '../ui/AuthArrow'
import AuthBtn from '../ui/AuthBtn'
import AuthForm from '../ui/AuthForm'
import AuthHeader from '../ui/AuthHeader'
import AuthHelp from '../ui/AuthHelp'
import { login } from '../utils/constants'
import useTitle from '../hooks/useTitle'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../main'

const Login = () => {
	useTitle({ title: 'Вход' })
	const [form, setForm] = useState()
	const navigate = useNavigate()
	const [err, setErr] = useState()
	const { setUser } = useContext(AuthContext)
	const handleSubmit = async e => {
		e.preventDefault()
		const user = await UserService.login(form)
		if (user.data) {
			setUser(user.data)
			localStorage.setItem('userId', user.data.id)
			navigate('/profile', { replace: true })
		} else {
			setErr(user.message)
		}
	}
	return (
		<main className='relative flex items-center justify-center  '>
            <div className='bg-[#c5ad87] p-6 rounded-lg  shadow-lg max-w-md w-full'>
			<AuthHeader title={'Вход'} />
			<AuthArrow />
			<form
				className='flex flex-col max-h-screen gap-y-3 px-4 mt-5 md:grid md:place-content-center md:mt-0 md:w-full'
				onSubmit={handleSubmit}
			>
				{login.map(item => (
					<AuthForm
						{...item}
						key={item.id}
						setForm={setForm}
						form={form}
						validate={false}
					/>
				))}
				<p className='text-danger font-bold'>{err}</p>
				<AuthBtn title={'Вход'} />
				<AuthHelp
					text={'Еще не успели зарегестрироваться?'}
					title={'Зарегестрироваться'}
					link={'/register'}
				/>
			</form>
			</div>
		</main>
	)
}

export default Login
