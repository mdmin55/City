import { useRef, useState } from 'react'
import useTitle from '../hooks/useTitle'
import Problem from '../components/modals/Problem'
import { useEffect } from 'react'
import ProblemForm from '../ui/ProblemForm'
import { useContext } from 'react'
import { AuthContext, ProblemContext } from '../main'
import Category from '../components/modals/Category'
import CategoryForm from '../ui/CategoryForm'
import Card from '../ui/Card'
import { NavLink } from 'react-router-dom'
import DeleteCategoryCard from '../ui/DeleteCategoryCard'

const Problems = () => {
	useTitle({ title: 'Заявки' })
	const [show, setShow] = useState(false)
	const [catShow, setCatShow] = useState(false)
	const { user } = useContext(AuthContext)
	const { problem } = useContext(ProblemContext)
	const problems = problem && [...problem].reverse()
	const [filteredData, setFilteredData] = useState(problems)
	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	})


	
	const data = () => {
		if (filteredData?.length === 0 || filteredData === undefined) {
			return problems
		} else {
			return filteredData
		}
	}

	return (
		<main className='flex flex-col gap-y-5 mb-[90px] mt-[5%] px-4 md:px-0 md:mb-5'>
			<p className='flex items-center justify-center font-semibold text-2xl pt-5 md:hidden'>
				Заявки
			</p>
			<hr className='border-white/60 border-solid md:hidden' />

			<div className='flex items-center justify-around flex-col gap-y-2 msm:flex-row msm:gap-x-2'>
				<button
					className={`${
						user?.role === 'admin' ? 'text-lg' : 'w-full text-xl'
					} bg-primary duration-300 px-2 py-1 rounded-md hover:bg-secondary w-full md:hidden msm:w-fit`}
					onClick={() => setShow(true)}
				>
					Создать заявку
				</button>
				<button
					className={`${
						user?.role === 'admin' ? 'block text-lg' : 'hidden text-xl'
					} bg-primary duration-300 px-2 py-1 rounded-md hover:bg-secondary w-full md:hidden msm:w-fit`}
					onClick={() => setCatShow(true)}
				>
					Добавить категорию
				</button>
			</div>
			<hr className='border-white/60 border-solid md:hidden' />
			{!user ? (
				<p className='text-center text-3xl font-bold'>
					Хотите оставить заявку? <br />
					<span className='text-xl font-semibold'>
						Нужно войти в профиль, пройдите{' '}
						<NavLink to='/register' className='text-primary underline'>
							регистрацию
						</NavLink>
					</span>
				</p>
			) : (
				<div className={`flex justify-center`}>
					<ProblemForm />
					<CategoryForm />
					<DeleteCategoryCard />
				</div>
			)}
			<p className='hidden items-center justify-center text-4xl font-bold md:flex'>
				Все заявки
			</p>
			{problems?.length === 0 ? (
				<p className='text-center mt-5 font-bold text-2xl'>
					Пока что нет заявок
				</p>
			) : (
				<>
					
					<div className='mt-5 grid grid-cols-2 gap-4'>
						{data()?.map(item => (
							<div key={item.id}>
								<Card item={item} />
							</div>
						))}
					</div>
				</>
			)}

			{show ? <Problem setShow={setShow} /> : null}
			{catShow ? <Category setCatShow={setCatShow} catShow={catShow} /> : null}
		</main>
	)
}

export default Problems
