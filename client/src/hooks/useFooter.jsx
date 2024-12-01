import { useLocation } from 'react-router-dom'

const useFooter = () => {
	const location = useLocation()
	return (
		location.pathname === '/register' ||
		location.pathname === '/login' ||
		location.pathname === '/profile'
	)
}

export default useFooter
