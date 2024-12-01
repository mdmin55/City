import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from './components/AuthRouter'
import Footer from './components/Footer'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext, CategoryContext, ProblemContext } from './main'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Problems from './pages/Problems'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import CategoryService from './services/CategoryService'
import ProblemService from './services/ProblemService'
import UserService from './services/UserService'
import ScrollToTop from './utils/ScrollToTop'

function App() {
	const [user, setUser] = useState()
	const [categories, setCategories] = useState()
	const [problem, setProblem] = useState()

	async function getUser() {
		const userId = localStorage.getItem('userId')
		if (userId) {
			const user = await UserService.getById(userId)
			setUser(user)
		} else {
			setUser(null)
		}
	}

	async function getProblems() {
		const problem = await ProblemService.getAll()
		setProblem(problem)
	}

	async function getCategories() {
		const categories = await CategoryService.getAll()
		setCategories(categories)
	}

	useEffect(() => {
		getUser(), getProblems(), getCategories()
	}, [])
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<ProblemContext.Provider value={{ problem, setProblem }}>
				<CategoryContext.Provider value={{ categories, setCategories }}>
					<ScrollToTop />
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/register'
							element={
								<AuthRouter>
									<Registration />
								</AuthRouter>
							}
						/>
						<Route
							path='/login'
							element={
								<AuthRouter>
									<Login />
								</AuthRouter>
							}
						/>
						<Route
							path='/profile'
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
						<Route path='/problems' element={<Problems />} />
						<Route path='*' element={<Error />} />
					</Routes>
					<Footer />
				</CategoryContext.Provider>
			</ProblemContext.Provider>
		</AuthContext.Provider>
	)
}

export default App
