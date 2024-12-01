import { useState } from 'react'
import InfoTab from './InfoTab'
import ProblemTab from './ProblemTab'


const Tabs = () => {
	const [tab, setTab] = useState('info')

	const infoTab = () => {
		setTab('info')
	}

	const problemTab = () => {
		setTab('problem')
	}

	
	return (
		<div className='relative'>
			<div className='flex items-center justify-between text-sm md:text-2xl md:justify-around'>
				<p
					className={
						tab === 'info'
							? 'bg-primary duration-300 px-2 py-1 rounded-md'
							: 'px-2 py-1'
					}
					onClick={infoTab}
				>
					Информация
				</p>
				<p
					className={
						tab === 'problem'
							? 'bg-primary duration-300 px-2 py-1 rounded-md'
							: 'px-2 py-1'
					}
					onClick={problemTab}
				>
					Заявки
				</p>
				
			</div>
			<div>
    {tab === 'info' ? (
        <InfoTab />
    ) : tab === 'problem' ? (
        <ProblemTab />
    ) : null} {}
</div>
		</div>
	)
}

export default Tabs
