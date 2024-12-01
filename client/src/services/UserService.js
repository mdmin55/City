import { USER_URL } from '../utils/api'

const UserService = {
	register: async data => {
		try {
			const res = await fetch(`${USER_URL}/register`, {
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
	login: async data => {
		try {
			const res = await fetch(`${USER_URL}/login`, {
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
	getById: async id => {
		try {
			const res = await fetch(`${USER_URL}/${id}`, {
				method: 'GET'
			})
			return res.json()
		} catch (error) {
			console.log(error)
		}
	}
}

export default UserService
