import { NavLink } from 'react-router-dom'
import useHeader from '../../hooks/useHeader'
import useScroll from '../../hooks/useScroll'
import { navigationPC } from '../../utils/constants'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../main'

const PCHeader = () => {
	const location = useHeader()
	const scroll = useScroll()
	const { user, setUser } = useContext(AuthContext)
	const loc = useLocation()
	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('userId')
	}

	return (
		<>
			<div
				className={`${
					location
						? 'hidden'
						: `hidden fixed z-10 top-0 right-0 left-0 duration-300 ${
								scroll ? 'bg-white/30' : 'bg-transparent'
						  } items-center py-3 md:flex md:justify-between md:px-5 lg:justify-around`
				}`}
			>
				<NavLink to='/'>
					<img src='./logo.png' alt='Logo' className='w-[60px] h-[60px]' />
				</NavLink>
				<div className='flex items-center gap-4'>
					{user ? (
						<>
							<NavLink
								to='/profile'
								className={`${
									loc.pathname === '/profile' ? 'hidden' : 'block'
								} bg-primary/15 rounded-full duration-500 py-2 px-2 text-xl font-semibold hover:bg-secondary`}
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
							</NavLink>
							<NavLink
								to='/problems'
								className={`${
									loc.pathname === '/problems' ? 'hidden' : 'block'
								} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
							>
								Создать заявку
							</NavLink>
							<div
								className={`${
									user ? 'block' : 'hidden'
								} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
								onClick={handleLogout}
							>
								Выход
							</div>
						</>
					) : (
						navigationPC.map(item => (
							<NavLink
								key={item.id}
								to={item.link}
								className='bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary'
							>
								{item.title}
							</NavLink>
						))
					)}
					<NavLink
						to='/problems'
						className={`${
							loc.pathname === '/problems' || user ? 'hidden' : 'block'
						} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
					>
						Создать заявку
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default PCHeader
