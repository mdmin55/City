import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../main'

const ProtectedRoute = ({ children }) => {
	const { user } = useContext(AuthContext)

	if (user === null) {
		return <Navigate to={'/login'} />
	} else {
		return children
	}
}

export default ProtectedRoute
