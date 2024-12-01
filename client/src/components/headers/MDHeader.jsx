import { NavLink } from 'react-router-dom'
import useHeader from '../../hooks/useHeader'
import { navigationMD } from '../../utils/constants'
import { useState } from 'react'

const MDHeader = () => {
	const location = useHeader()
	const [text, setText] = useState(true)
	return (
		<>
			<div
				className={`${
					location
						? 'hidden'
						: 'fixed z-10 bottom-0 right-0 left-0 shadow-inner bg-main shadow-white/5 flex items-center justify-between px-4 py-4 md:hidden'
				}`}
			>
				{navigationMD.map(item => (
					<NavLink
						to={item.link}
						key={item.id}
						className='flex flex-col items-center justify-center'
					>
						<img
							src={item.img}
							alt=''
							className={`${!text ? 'w-[35px] h-[35px]' : 'w-[25px] h-[25px]'}`}
						/>
						{text ? <p className='font-semibold'>{item.title}</p> : null}
					</NavLink>
				))}
			</div>
		</>
	)
}

export default MDHeader
