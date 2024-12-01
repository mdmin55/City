import { useContext } from 'react'
import { AuthContext } from '../main'
import { Navigate } from 'react-router-dom'

const AuthRouter = ({ children }) => {
	const { user } = useContext(AuthContext)

	if (user !== null) {
		return <Navigate to={'/'} />
	} else {
		return children
	}
}

export default AuthRouter
