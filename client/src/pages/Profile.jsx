import MDMain from '../components/mainProfile/MDMain'
import PCMain from '../components/mainProfile/PCMain'
import useTitle from '../hooks/useTitle'

const Profile = () => {
	useTitle({ title: 'Профиль' })
	return (
		<main>
			<MDMain />
			<PCMain />
		</main>
	)
}

export default Profile
