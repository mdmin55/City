import CategoryForm from '../../ui/CategoryForm'

const Category = ({ setCatShow, catShow }) => {
	return (
		<div className='absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-secondary rounded-xl  w-full h-[90%] p-4 md:hidden'>
			<div className='flex justify-between'>
				<p className='text-xl font-bold'>Новая категория</p>
				<img
					src='./modal/close.svg'
					onClick={() => setCatShow(false)}
					className='text-2xl font-bold w-[30px] h-[30px]'
				/>
			</div>
			<CategoryForm setCatShow={setCatShow} catShow={catShow} />
		</div>
	)
}

export default Category
