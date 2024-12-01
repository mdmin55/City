import { useContext, useState } from 'react'
import { AuthContext } from '../main'
import Card from '../ui/Card'

const Cards = () => {
	const { user } = useContext(AuthContext)
	const problem = user.problems && [...user.problems].reverse()
	const [filteredData, setFilteredData] = useState(problem)

	const data = () => {
		if (filteredData?.length === 0 || filteredData === undefined) {
			return problem
		} else {
			return filteredData
		}
	}

	return (
		<>
			{problem?.length === 0 || problem === undefined ? null : (
				<>
					
					<div className='mt-5 flex gap-y-5  text-black '>
						{data()?.map(item => (
							<div key={item.id}>
								<Card item={item} />
							</div>
						))}
					</div>
				</>
			)}
		</>
	)
}

export default Cards
