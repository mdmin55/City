const HomeCard = ({ item }) => {
	return (
		<div className='flex flex-col'>
			<div className='relative'>
				<img
					src={item.afterImg}
					alt=''
					className='w-full h-[150px] opacity-100 object-cover rounded-lg scale-95 ease-in duration-300 hover:opacity-0 hover:scale-100 md:h-[500px] md:duration-500'
				/>
				<img
					src={item.beforeImg}
					alt=''
					className='absolute top-0 left-0 opacity-0 w-full h-[150px] object-cover rounded-lg scale-95 ease-in duration-300 hover:scale-100 hover:opacity-100 md:h-[500px] md:duration-500 md:m-y-4'
				/>
			</div>
			<div className='flex flex-col gap-y-2 scale-95 md:gap-y-5'>
				<p className='font-bold text-xl md:text-3xl md:font-black'>
					{item.title}
				</p>
				<div className='flex flex-col md:items-center md:justify-between md:flex-row'>
					<p className='text-sm font-bold text-white/50 md:text-xl'>
						Категория: {item.category.title}
					</p>
					<p className='text-sm font-bold text-white/50 md:text-xl'>
						{new Date(item?.createdAt).toLocaleString('ru-RU', {
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
							year: 'numeric',
							month: 'numeric',
							day: '2-digit'
						})}
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomeCard
