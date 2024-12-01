import { CATEGORY_URL } from '../utils/api'

const CategoryService = {
	getAll: async () => {
		try {
			const res = await fetch(`${CATEGORY_URL}`, {
				method: 'GET'
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	},

	create: async data => {
		try {
			const res = await fetch(`${CATEGORY_URL}`, {
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

	delete: async id => {
		try {
			const res = await fetch(`${CATEGORY_URL}/${id}`, {
				method: 'DELETE'
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	}
}

export default CategoryService
