import UserData from '../UserData'
import Tabs from '../tabs/Tabs'

const MDMain = () => {
	return (
		<div className='flex flex-col justify-center gap-y-5 mb-[90px] px-4 md:hidden'>
			<p className='flex items-center justify-center font-semibold text-2xl pt-5 md:hidden'>
				Профиль
			</p>
			
			<UserData />
		
			<Tabs />
		</div>
	)
}

export default MDMain
