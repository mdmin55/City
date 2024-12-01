import { useContext } from 'react'
import useTitle from '../hooks/useTitle'
import { ProblemContext } from '../main'
import HomeCard from '../ui/HomeCard'

const Home = () => {
	useTitle({ title: 'Главная' })
	const { problem } = useContext(ProblemContext)
	return (
		<main className='flex flex-col gap-y-5 mb-[90px] px-4 md:px-0 md:mb-5'>
			<p className='flex items-center justify-center font-semibold text-2xl pt-5 md:hidden'>
				Главная
			</p>
			<hr className='block border-white/60 border-solid md:hidden' />
			<div className='relative'>
				<img
					src='./home/homeimg.jpg'
					alt='homeimg'
					className='rounded-md w-full object-cover brightness-50 max-h-screen'
				/>
			<div className='absolute bottom-4 left-3 flex flex-col justify-center items-center w-full gap-y-2 md:bottom-11  md:gap-y-4 md:left-8 h-full'>
    
						<div className='flex flex-col justify-center items-center'>
							<p className='font-bold text-2xl  md:text-6xl'>
								Улучшим наш город ВМЕСТЕ</p>
							<p className='text-white md:text-3xl md:font-semibold'>
							Оставьте заявку на нашем портале, для улучшения города!</p>
						</div>

					<div className='flex flex-col items-center bg-white/25 p-3 mt-4 rounded-md'>
						<h1 className='text-3xl'>РЕШЕННЫЕ ПРОБЛЕМЫ:</h1>
						<h1 className='text-3xl'>202</h1>
					</div>
</div>
			</div>

			<p className='font-semibold text-lg text-center px-0 md:px-4 md:text-4xl md:font-bold'>
			Недавно решенные проблемы
			</p>
			{problem?.filter(e => e.status === 'Решена').length === 0 ? (
				<p className='text-left mt-5  text-xl md:text-2xl'>
					<div className="flex justify-around">
						<div className='w-1/3 flex flex-col bg-white p-7 rounded-md'>
							<img src='./home/tishino.jpg' className='size-auto'/>
							<h3 className='text-black'>Благоустройство парка Тишино</h3>
							<h2 className='text-black font-light'>Категория: Парки</h2>
							<br/>
							<p className='text-black font-light text-base'>Дата начало: 01.08.2022г</p>
							<p className='text-black font-light text-base'>Дата завершения: 12.01.2024г</p>
						</div>
						<div className='w-1/3 flex flex-col bg-white p-7 rounded-md'>
							<img src='./home/ng.jpg' className='size-auto'/>
							<h3 className='text-black'>Новый город</h3>
							<h2 className='text-black font-light'>Категория: Новый квартал</h2>
							<br/>
							<p className='text-black font-light text-base'>Дата начало: 11.05.2022г</p>
							<p className='text-black font-light text-base'>Дата завершения: 03.09.2024г</p>
						</div>
					</div>
				</p>
			) : (
				<div className='grid grid-cols-2 gap-4'>
					{problem &&
						[...problem]
							.filter(e => e.status === 'Решена')
							.slice(0, 2)
							.map(item => <HomeCard item={item} key={item.id}/>)}
				</div>
			)}
		</main>
	)
}


export default Home
