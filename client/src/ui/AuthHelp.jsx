import { NavLink } from 'react-router-dom'

const AuthHelp = ({ text, title, link }) => {
	return (
		<>
			<p className='mb-5 font-normal md:text-sm'>
				{text}{' '}
				<NavLink
					to={link}
					className='text-primary font-normal underline duration-300 hover:text-secondary'
				>
					{title}
				</NavLink>
			</p>
		</>
	)
}

export default AuthHelp
