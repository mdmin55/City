import { useLocation } from 'react-router-dom'

const useHeader = () => {
	const location = useLocation()
	return location.pathname === '/register' || location.pathname === '/login'
}

export default useHeader
