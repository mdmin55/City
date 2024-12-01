import UserData from '../UserData'
import Tabs from '../tabs/Tabs'

const PCMain = () => {
	return (
		<div className='hidden gap-y-5 px-4 mb-5 mt-[6%] md:flex md:flex-col'>
			<UserData />
			<hr className="border-white/60 border-solid" />
			<div>
				<Tabs />
			</div>
		</div>
	)
}

export default PCMain
