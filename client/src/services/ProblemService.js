import { PROBLEM_URL } from '../utils/api'

const ProblemService = {
	getAll: async () => {
		try {
			const res = await fetch(`${PROBLEM_URL}`, {
				method: 'GET'
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	},
	create: async data => {
		try {
			const res = await fetch(`${PROBLEM_URL}`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	},
	update: async (id, data) => {
		try {
			const res = await fetch(`${PROBLEM_URL}/${id}`, {
				method: 'PATCH',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	},
	delete: async id => {
		try {
			const res = await fetch(`${PROBLEM_URL}/${id}`, {
				method: 'DELETE'
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	}
}

export default ProblemService
