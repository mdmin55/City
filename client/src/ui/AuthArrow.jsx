import { NavLink } from 'react-router-dom'

const AuthArrow = () => {
	return (
		<>
			<NavLink to='/'>
				<img
					src='./auth/arrow.svg'
					alt='arrow'
					className='absolute top-5 left-5 w-[30px] h-[30px]'
				/>
			</NavLink>
		</>
	)
}

export default AuthArrow
