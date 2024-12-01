import ProblemForm from '../../ui/ProblemForm'

const Problem = ({ setShow }) => {
	return (
		<div className='absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-secondary rounded-xl  w-full h-[90%] p-4 md:hidden'>
			<div className='flex justify-between'>
				<p className='text-xl font-bold'>Новая заявка</p>
				<img
					src='./modal/close.svg'
					onClick={() => setShow(false)}
					className='text-2xl font-bold w-[30px] h-[30px]'
				/>
			</div>
			<ProblemForm />
		</div>
	)
}

export default Problem
