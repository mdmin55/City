const AuthBtn = ({ title, onClick, color }) => {
	return (
		<>
			<button
				type='submit'
				className={`${
					color ? `bg-${color}` : 'bg-primary'
				} rounded-lg duration-500 mt-5 py-2 px-4 text-xl font-semibold ${
					color ? '' : 'hover:bg-secondary'
				} md:text-xl`}
				onClick={onClick}
			>
				{title}
			</button>
		</>
	)
}

export default AuthBtn
