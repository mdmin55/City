import { useContext } from 'react'
import { AuthContext } from '../main'

const UserData = () => {
	const { user } = useContext(AuthContext)
	return (
		<>
	<div className='flex justify-around flex-row items-center'>

		    <img src='./home/chel.png' className='w-14 h-14'/>

			<div className='flex flex-col items-center gap-y-1 justify-center md:gap-y-3 mt-5'>
				
				<p className='text-2xl md:text-3xl md:font-bold'>
					{user?.surname} {user?.name}
					
				</p>
				<p className='text-xl md:text-xl md:font-normal text-gray-700'>
					{user?.email}
				</p>
				<p className='text-sm md:text-xl md:font-normal text-gray-950'>
					{user?.role === 'user' ? 'Пользователь' : 'Администратор'}
				</p>
			</div>
			
	</div>
		</>
	)
}

export default UserData
