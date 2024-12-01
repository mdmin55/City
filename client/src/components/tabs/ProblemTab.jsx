import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../main'
import Cards from '../Cards'


const ProblemTab = () => {
	const { user } = useContext(AuthContext)
	return (
		<>
			<div
				className={`${
					!user?.problems?.length ? 'flex' : 'hidden'
				} flex-col items-center justify-center gap-5 `}
			>
				<p className='text-center mt-10 font-bold text-xl md:text-2xl'>
					Заявки еще не созданы
				</p>
				<NavLink
					to='/problems'
					className='bg-primary rounded-lg duration-500 py-2 px-4 text-md font-semibold hover:bg-secondary md:text-xl'
				>
					Создать заявку
				</NavLink>
			</div>
			<Cards />
		</>
	)
}

export default ProblemTab
