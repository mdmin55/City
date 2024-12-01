import { useState } from 'react'

const useScroll = () => {
	const [colorChange, setColorchange] = useState(false)
	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setColorchange(true)
		} else {
			setColorchange(false)
		}
	}

	window.addEventListener('scroll', changeNavbarColor)
	return colorChange
}

export default useScroll
